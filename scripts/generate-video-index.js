import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'pages/videos/uploads');
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

const listItems = files.map(f =>
  `<li><a href="/pages/videos/uploads/${f}">${f}</a></li>`
).join('\n');

const html = `
<ul>
${listItems}
<p>ts is broken, here's how to use it correctly:<br/>go to Actions on the repo, then click on the newest action that's been run. go to the deploy job, then "List dist contents." copy the file name (for example, akuma-Bm688GeS.html), and use it in this format: http://lowes.qzz.io/assets/[the filename you found]<br/>there, that should be a workaround until my dumbass finds a fix</p>
</ul>
`;

writeFileSync(join(process.cwd(), 'pages/videos/tv-index.html'), html);
console.log('TV index generated!');