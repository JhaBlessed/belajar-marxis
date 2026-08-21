import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Authors } from './pages/Authors';
import { HistoricalPersons } from './pages/HistoricalPersons';
import { HistoricalPersonDetail } from './pages/HistoricalPersonDetail';
import { AuthorDetail } from './pages/AuthorDetail';
import { Works } from './pages/Works';
import { WorkDetail } from './pages/WorkDetail';
import { Concepts } from './pages/Concepts';
import { ConceptDetail } from './pages/ConceptDetail';
import { Timeline } from './pages/Timeline';
import { IdeaMap } from './pages/IdeaMap';
import { Indonesia } from './pages/Indonesia';
import { Organizations } from './pages/Organizations';
import { OrganizationDetail } from './pages/OrganizationDetail';
import { LearningPaths } from './pages/LearningPaths';
import { Progress } from './pages/Progress';
import { Saved } from './pages/Saved';
import { Glossary } from './pages/Glossary';
import { About } from './pages/About';
import { Library } from './pages/Library';
import { Reader } from './pages/Reader';
import { Sources } from './pages/Sources';
import { SourceArchive } from './pages/SourceArchive';
import { SejarahIndonesia } from './pages/SejarahIndonesia';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
    <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">Konten tidak ditemukan</h2>
    <div className="flex gap-4">
      <a href="/" className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Kembali ke Beranda</a>
      <a href="/karya" className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">Lihat semua karya</a>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/baca/:workSlug" element={<Reader />} />
        <Route path="/baca/:workSlug/:chapterSlug" element={<Reader />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tokoh" element={<Authors />} />
          <Route path="tokoh-sejarah" element={<HistoricalPersons />} />
          <Route path="tokoh-sejarah/:slug" element={<HistoricalPersonDetail />} />
          <Route path="tokoh/:slug" element={<AuthorDetail />} />
          <Route path="karya" element={<Works />} />
          <Route path="karya/:slug" element={<WorkDetail />} />
          <Route path="perpustakaan" element={<Library />} />
          <Route path="sumber" element={<Sources />} />
          <Route path="sumber/arsip-lokal" element={<SourceArchive />} />
          <Route path="konsep" element={<Concepts />} />
          <Route path="konsep/:slug" element={<ConceptDetail />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="peta-gagasan" element={<IdeaMap />} />
          <Route path="indonesia" element={<Indonesia />} />
          <Route path="sejarah-indonesia" element={<SejarahIndonesia />} />
          <Route path="organisasi" element={<Organizations />} />
          <Route path="organisasi/:slug" element={<OrganizationDetail />} />
          <Route path="belajar" element={<LearningPaths />} />
          <Route path="progres" element={<Progress />} />
          <Route path="tersimpan" element={<Saved />} />
          <Route path="glosarium" element={<Glossary />} />
          <Route path="tentang" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
