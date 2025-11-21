import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function generateShortCode(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

export async function POST(request: NextRequest) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        // Validate URL format
        try {
            new URL(url);
        } catch {
            return NextResponse.json(
                { error: 'Invalid URL format' },
                { status: 400 }
            );
        }

        // Generate unique short code
        let shortCode = generateShortCode();
        let isUnique = false;
        let attempts = 0;

        while (!isUnique && attempts < 10) {
            const { data: existing } = await supabase
                .from('links')
                .select('short_code')
                .eq('short_code', shortCode)
                .single();

            if (!existing) {
                isUnique = true;
            } else {
                shortCode = generateShortCode();
                attempts++;
            }
        }

        if (!isUnique) {
            return NextResponse.json(
                { error: 'Failed to generate unique short code' },
                { status: 500 }
            );
        }

        // Insert into database
        const { data, error } = await supabase
            .from('links')
            .insert([
                {
                    short_code: shortCode,
                    original_url: url,
                    clicks: 0,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to create short link' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            shortCode: data.short_code,
            originalUrl: data.original_url,
            shortUrl: `${request.nextUrl.origin}/${data.short_code}`,
        });
    } catch (error) {
        console.error('Error creating short link:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
