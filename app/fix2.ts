import * as fs from 'fs';
import * as path from 'path';

const files = [
  'app/agb/page.tsx',
  'app/avv/page.tsx',
  'app/datenschutz/page.tsx',
  'app/impressum/page.tsx',
  'components/CookieBanner.tsx'
];

files.forEach(f => {
  const p = path.resolve(f);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');
  
  // adding break-words to the pages wrapper
  content = content.replace(/className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed"/g, 'className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed break-words"');
  
  // also add hyphens-auto to the very long headings in AVV, AGB, Datenschutz ?
  // let's just make the main wrapper have `w-full` if not present.
  // Actually, `<main>` already has `max-w-4xl mx-auto w-full`. Wait, it didn't have `w-full`. Let's add it.
  content = content.replace(/className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto/g, 'className="flex-grow w-full pt-24 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto');
  
  fs.writeFileSync(p, content);
});
console.log('done');
