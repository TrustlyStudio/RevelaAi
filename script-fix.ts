import fs from 'fs';
import path from 'path';

function walk(dir: string, callback: (filepath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function processFile(filePath: string) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Let's fix some possible regex bugs:
  // "hover:text-slate-900 dark:text-white" -> "hover:text-slate-900 dark:hover:text-white"
  content = content.replace(/hover:text-slate-900 dark:text-white/g, 'hover:text-slate-900 dark:hover:text-white');
  content = content.replace(/hover:text-slate-800 dark:text-slate-100/g, 'hover:text-slate-800 dark:hover:text-slate-100');
  // "group-hover:text-slate-900 dark:text-white" -> "group-hover:text-slate-900 dark:group-hover:text-white"
  content = content.replace(/group-hover:text-slate-900 dark:text-white/g, 'group-hover:text-slate-900 dark:group-hover:text-white');
  
  // "group-hover:bg-white dark:bg-slate-900" -> "group-hover:bg-white dark:group-hover:bg-slate-900"
  content = content.replace(/group-hover:bg-white dark:bg-slate-900/g, 'group-hover:bg-white dark:group-hover:bg-slate-900');

  // "bg-white dark:bg-slate-900/20" -> wait, next-themes handles dark mode based on classes. If the script produced multiple dark:bg-slate-800, let's dedup them.
  content = content.replace(/dark:bg-slate-800 dark:bg-slate-800/g, 'dark:bg-slate-800');
  content = content.replace(/dark:hover:bg-slate-800 dark:hover:bg-slate-800/g, 'dark:hover:bg-slate-800');
  
  // also, in layout.tsx, bg-brand-off-white dark:bg-slate-950 font-sans text-brand-dark-blue dark:text-slate-100
  // we did this manually.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

walk('./app', processFile);
walk('./components', processFile);
