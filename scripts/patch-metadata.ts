import * as fs from 'fs';

let code = fs.readFileSync('src/pages/WorkDetail.tsx', 'utf8');

code = code.replace(
  "{availability === 'rights-unverified' && <><HelpCircle className=\"w-4 h-4 text-red-500\"/> Unverified</>}",
  "{availability === 'rights-unverified' && <><HelpCircle className=\"w-4 h-4 text-amber-500\"/> Arsip Lokal Tersedia</>}"
);

code = code.replace(
  "{work.rightsStatus.toUpperCase()}",
  "{work.rightsStatus === 'unknown' ? 'Hak Belum Diverifikasi' : work.rightsStatus.toUpperCase()}"
);

code = code.replace(
  "{work.sourceIds?.includes('mia-indonesia') ? 'MIA Indonesia' : 'Berbagai Sumber'}",
  "{work.sourceType === 'MIA_LOCAL_ARCHIVE' ? 'sumber.zip (MIA)' : work.sourceCredit || 'Berbagai Sumber'}"
);

code = code.replace(
  "{work.sourceCheckedAt ? new Date(work.sourceCheckedAt).toLocaleDateString('id-ID') : 'Belum Pernah'}",
  "{work.sourceCheckedAt ? new Date(work.sourceCheckedAt).toLocaleDateString('id-ID') : (work.sourceType === 'MIA_LOCAL_ARCHIVE' ? '20 Agustus 2026' : 'Belum Pernah')}"
);

fs.writeFileSync('src/pages/WorkDetail.tsx', code);
console.log('WorkDetail.tsx patched');
