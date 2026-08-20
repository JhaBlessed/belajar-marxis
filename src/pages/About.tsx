import { ExternalLink } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Tentang Belajar Marxis</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <section>
          <h2>Tujuan Proyek</h2>
          <p>
            Belajar Marxis adalah sebuah inisiatif independen yang bertujuan menyediakan peta belajar dan panduan referensi bagi siapa saja yang ingin mempelajari pemikiran Marxis melalui sumber-sumber yang tersedia dalam bahasa Indonesia.
          </p>
          <p>
            Karya-karya Marxis sering kali sulit dipahami tanpa mengetahui konteks sejarah, perdebatan pada masa itu, serta definisi dari istilah-istilah kuncinya. Ensiklopedia ini hadir untuk menjembatani kesenjangan tersebut dengan menyediakan rangkuman, glosarium, dan jalur belajar yang sistematis.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="mt-0">Sumber Utama</h2>
          <p>
            Basis teks primer (teks asli terjemahan) yang dirujuk oleh ensiklopedia ini dikelola secara independen oleh <strong>Marxists Internet Archive (MIA) Seksi Bahasa Indonesia</strong>.
          </p>
          <a href="https://www.marxists.org/indonesia/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:underline font-bold">
            Kunjungi Marxists Internet Archive <ExternalLink className="w-4 h-4" />
          </a>
        </section>

        <section>
          <h2>Metodologi Rangkuman</h2>
          <p>
            Rangkuman yang ada di dalam website ini <strong>bukanlah salinan</strong> dari teks asli, melainkan sintesis orisinal yang ditujukan untuk pendidikan. Struktur rangkuman dibagi ke dalam: konteks sejarah, tesis utama, struktur argumen, dan konsep kunci agar pembaca mendapatkan gambaran holistik sebelum atau sesudah membaca teks aslinya di MIA.
          </p>
        </section>

        <section>
          <h2>Status Verifikasi</h2>
          <p>Setiap entri karya dalam ensiklopedia ini ditandai dengan status verifikasi untuk menjamin akurasi informasi historis dan teoretis:</p>
          <ul>
            <li><strong>Terverifikasi:</strong> Data metadata, rangkuman, dan tautan ke MIA telah diperiksa dan dianggap akurat.</li>
            <li><strong>Verifikasi Sebagian:</strong> Beberapa elemen (seperti tautan spesifik atau detail tahun) masih memerlukan penyesuaian.</li>
            <li><strong>Perlu Verifikasi:</strong> Entri masih dalam tahap draf dan belum sepenuhnya divalidasi silang.</li>
          </ul>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900/30 text-yellow-900 dark:text-yellow-100 text-sm">
            Website ini merupakan proyek pendidikan independen open-source dan <strong>Bukan situs resmi Marxists Internet Archive</strong>. Hak atas teks terjemahan primer sepenuhnya mengikuti ketentuan dan atribusi masing-masing penerjemah sebagaimana dicantumkan di situs MIA.
          </div>
        </section>
      </div>
    </div>
  );
}
