# LNK - ShortLink

Aplikasi URL shortener modern yang dibangun dengan Next.js dan Supabase.

## Features

- 🎨 Modern minimal dark theme (Supabase-inspired)
- 🚀 Fast & Responsive
-  Copy to clipboard
- 🔗 Auto-generated short codes
- 📈 Click tracking
- ⚡ Real-time updates
- 🌐 Clean centered layout

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## 🗄️ Setup Database Supabase

**PENTING:** Sebelum menjalankan aplikasi, Anda HARUS setup database terlebih dahulu!

### Langkah-langkah:

1. **Buka Supabase Dashboard**
   - Pergi ke: https://app.supabase.com
   - Login dengan akun Anda

2. **Pilih Project Anda**
   - Klik project yang ingin Anda gunakan
   - Atau buat project baru jika belum ada

3. **Buka SQL Editor**
   - Di sidebar kiri, klik **"SQL Editor"**
   - Klik **"New query"**

4. **Copy & Paste SQL Script**
   - Buka file `supabase-setup.sql` di project ini
   - **Copy SEMUA isi file** tersebut
   - **Paste** ke SQL Editor Supabase
   - Klik tombol **"RUN"** atau tekan `Ctrl + Enter`

5. **Verifikasi**
   - Jika berhasil, Anda akan melihat pesan sukses
   - Pergi ke **"Table Editor"** di sidebar
   - Anda akan melihat tabel **"links"** sudah terbuat

### ✅ Selesai!

Database Anda sudah siap digunakan. Lanjut ke bagian Installation di bawah.

## Installation

1. Clone repository ini
2. Install dependencies:

```bash
npm install
```

3. Buat file `.env.local` dan tambahkan credentials Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Jalankan development server:

```bash
npm run dev
```

5. Buka [http://localhost:3000](http://localhost:3000)

## Deployment ke Vercel

1. Push code ke GitHub repository
2. Import project di Vercel
3. Tambahkan environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Atau gunakan Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Environment Variables

Aplikasi ini memerlukan environment variables berikut:

- `NEXT_PUBLIC_SUPABASE_URL`: URL Supabase project Anda
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon/Public key dari Supabase

## API Endpoints

### POST /api/shorten
Membuat short link baru

**Request Body:**
```json
{
  "url": "https://example.com/very/long/url"
}
```

**Response:**
```json
{
  "shortCode": "abc123",
  "originalUrl": "https://example.com/very/long/url",
  "shortUrl": "https://yourdomain.com/abc123"
}
```

### GET /[code]
Redirect ke URL asli dan increment click counter

## Project Structure

```
shortlink-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── shorten/
│   │   │       └── route.ts      # API endpoints
│   │   ├── [code]/
│   │   │   └── page.tsx          # Dynamic redirect page
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles
│   └── lib/
│       └── supabase.ts           # Supabase client
├── .env.local                    # Environment variables
├── package.json
└── README.md
```

## License

MIT

## Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.
