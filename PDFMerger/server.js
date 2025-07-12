import express from 'express';
import path from 'path';
import { mergePdfs } from './testpdf.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 3000;

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async function (req, res) {
  await mergePdfs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect('/static/merged.pdf');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
