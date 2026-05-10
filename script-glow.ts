import fs from 'fs';

let content = fs.readFileSync('app/page.tsx', 'utf8');

content = content.replace(/dark:bg-slate-900/g, 'dark:bg-[#0B0F19]'); // slightly cooler dark
content = content.replace(/dark:bg-slate-950/g, 'dark:bg-[#0B0F19]');

// Increase contrast of text
content = content.replace(/dark:text-slate-300/g, 'dark:text-slate-200');
content = content.replace(/dark:text-slate-400/g, 'dark:text-slate-300');

// Add some glows to cards
content = content.replace(/dark:border-slate-700/g, 'dark:border-slate-800');
content = content.replace(/dark:hover:border-slate-300/g, 'dark:hover:border-rose-500/50');
content = content.replace(/hover:border-slate-300/g, 'hover:border-slate-300 dark:hover:border-rose-500/50 dark:hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.15)]');

fs.writeFileSync('app/page.tsx', content, 'utf8');
