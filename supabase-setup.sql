-- ============================================
-- SUPABASE DATABASE SETUP FOR URL SHORTENER
-- ============================================
-- Copy dan paste seluruh script ini ke Supabase SQL Editor
-- Kemudian klik "RUN" untuk membuat tabel dan konfigurasi
-- ============================================

-- 1. Create links table
CREATE TABLE IF NOT EXISTS links (
  id BIGSERIAL PRIMARY KEY,
  short_code VARCHAR(10) UNIQUE NOT NULL,
  original_url TEXT NOT NULL,
  clicks INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 2. Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_short_code ON links(short_code);
CREATE INDEX IF NOT EXISTS idx_created_at ON links(created_at DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE links ENABLE ROW LEVEL SECURITY;

-- 4. Drop existing policies if any (untuk menghindari error jika sudah ada)
DROP POLICY IF EXISTS "Allow public read access" ON links;
DROP POLICY IF EXISTS "Allow public insert" ON links;
DROP POLICY IF EXISTS "Allow public update" ON links;

-- 5. Create policy to allow public read access
CREATE POLICY "Allow public read access" ON links
  FOR SELECT
  USING (true);

-- 6. Create policy to allow public insert
CREATE POLICY "Allow public insert" ON links
  FOR INSERT
  WITH CHECK (true);

-- 7. Create policy to allow public update (for click counting)
CREATE POLICY "Allow public update" ON links
  FOR UPDATE
  USING (true);

-- ============================================
-- SELESAI! Database sudah siap digunakan
-- ============================================

-- Optional: Insert sample data untuk testing
-- Uncomment baris di bawah jika ingin insert data contoh
-- INSERT INTO links (short_code, original_url, clicks) 
-- VALUES ('abc123', 'https://google.com', 0);

-- Optional: Verify table creation
-- Uncomment baris di bawah untuk melihat struktur tabel
-- SELECT 
--   table_name, 
--   column_name, 
--   data_type, 
--   is_nullable
-- FROM 
--   information_schema.columns
-- WHERE 
--   table_name = 'links'
-- ORDER BY 
--   ordinal_position;
