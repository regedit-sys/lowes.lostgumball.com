import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'assets');
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

const listItems = files.map(f =>
  `<li><a href="/assets/${f}">${f}</a></li>`
).join('\n');

const html = `
<ul>
${listItems}
</ul>
`;

writeFileSync(join(process.cwd(), 'pages/videos/video-index.html'), html);
console.log('Video index generated!');