import * as fs from 'fs';
import * as path from 'path';

const files = [
  'app/agb/page.tsx',
  'app/avv/page.tsx',
  'app/datenschutz/page.tsx',
  'app/impressum/page.tsx'
];

files.forEach(f => {
  const p = path.resolve(f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-6"/g, 'className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto px-4 sm:px-6"');
  content = content.replace(/text-4xl/g, 'text-3xl md:text-4xl lg:text-5xl');
  content = content.replace(/text-2xl/g, 'text-xl md:text-2xl');
  content = content.replace(/text-3xl md:text-3xl md:text-4xl lg:text-5xl/g, 'text-2xl md:text-3xl md:text-4xl lg:text-5xl'); // fix in case of avv which has text-3xl md:text-4xl
  content = content.replace(/space-y-10/g, 'space-y-8 md:space-y-10');
  content = content.replace(/space-y-8 (?!md:)/g, 'space-y-6 md:space-y-8 ');
  fs.writeFileSync(p, content);
});
console.log('done');
