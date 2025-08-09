import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'pages/videos/uploads');
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

const listItems = files.map(f =>
  `<li><a href="/pages/videos/tv/${f}">${f}</a></li>`
).join('\n');

const html = `
<ul>
${listItems}
</ul>
`;

writeFileSync(join(process.cwd(), 'pages/videos/video-index.html'), html);
console.log('TV index generated!');