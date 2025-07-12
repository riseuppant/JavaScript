import PDFMerger from 'pdf-merger-js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mergePdfs = async (p1, p2) => {
  const merger = new PDFMerger();

  await merger.add(p1);
  await merger.add(p2);

  await merger.save('public/merged.pdf');
};

export { mergePdfs };
