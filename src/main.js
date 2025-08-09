import './style.css';

console.log("Site loaded with Catppuccin Mocha 🎨");

// Use a relative path from /src to /pages/videos/tv
const tvFiles = import.meta.glob('../pages/videos/tv/*.html', { as: 'url' });
console.log(tvFiles);

async function renderTVFiles() {
  const list = document.getElementById('tv-files-list');
  if (!list) return;
  list.innerHTML = '';
  for (const path in tvFiles) {
    const url = await tvFiles[path]();
    const fileName = url.split('/').pop();
    const li = document.createElement('li');
    li.innerHTML = `<a href="${url}" class="text-ctp-blue hover:underline">${fileName}</a>`;
    list.appendChild(li);
  }
}

if (document.getElementById('tv-files-list')) {
  renderTVFiles();
}