import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const port = Number(process.env.PORT || 3000);
createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = pathname === '/' || pathname === '/index.html' ? 'index.html'
    : pathname === '/diet-cvd-evidence-app.html' ? 'diet-cvd-evidence-app.html' : null;
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const content = await readFile(new URL('../public/' + file, import.meta.url));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch {
    res.writeHead(503); res.end('Run npm run build first.');
  }
}).listen(port, '0.0.0.0', () => console.log(`CardioDiet: http://localhost:${port}`));
