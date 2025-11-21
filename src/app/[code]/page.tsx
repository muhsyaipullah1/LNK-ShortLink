import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface PageProps {
    params: Promise<{
        code: string;
    }>;
}

export default async function RedirectPage({ params }: PageProps) {
    const { code } = await params;

    // Get the original URL from database
    const { data, error } = await supabase
        .from('links')
        .select('original_url, clicks')
        .eq('short_code', code)
        .single();

    if (error || !data) {
        redirect('/');
    }

    // Increment click count
    await supabase
        .from('links')
        .update({ clicks: data.clicks + 1 })
        .eq('short_code', code);

    // Redirect to original URL
    redirect(data.original_url);
}
