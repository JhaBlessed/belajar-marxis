# Belajar Marxis

"Peta Belajar Karya-Karya Marxis dalam Bahasa Indonesia"

Belajar Marxis adalah ensiklopedia pembelajaran untuk menjelajahi tokoh, karya, konsep, sejarah, dan perdebatan dalam koleksi Marxists Internet Archive (MIA) Bahasa Indonesia.

**Live Demo:** [TBA]

## Tech Stack
- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React
- Fuse.js

## Cara Install & Menjalankan

1. Clone repository
```bash
git clone <url-repo>
cd ensiklopedia-mia
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Build untuk production
```bash
npm run build
```

## Struktur Project

- `src/components/` - Komponen React (layout, ui, dsb)
- `src/data/` - Database lokal konten (tokoh, karya, konsep)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions (Search engine, dll)
- `src/pages/` - Halaman utama
- `src/types/` - TypeScript interfaces

## Cara Menambah Konten

Semua data tersimpan secara lokal di folder `src/data/`.
1. **Tokoh:** Buka `src/data/authors.ts` dan tambahkan object baru ke dalam array `authors`.
2. **Karya:** Buka `src/data/works.ts` dan tambahkan object baru ke dalam array `works`.
3. **Konsep:** Buka `src/data/concepts.ts` dan tambahkan object baru ke dalam array `concepts`.

## Deployment ke Netlify

Proyek ini sudah dilengkapi dengan `netlify.toml` untuk mempermudah auto-deploy.
Pastikan *Build command* diset ke `npm run build` dan *Publish directory* ke `dist`.
Aturan *SPA redirect* sudah ditangani secara otomatis melalui konfigurasi.
