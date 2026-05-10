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

  // fix broken hovers
  content = content.replace(/dark:hover:bg-slate-800 dark:bg-slate-950/g, 'dark:hover:bg-slate-800');
  content = content.replace(/dark:hover:bg-slate-800 dark:bg-slate-800/g, 'dark:hover:bg-slate-800');
  content = content.replace(/dark:hover:bg-slate-800 dark:bg-slate-900/g, 'dark:hover:bg-slate-800');
  content = content.replace(/dark:text-white dark:text-slate-100/g, 'dark:text-white');
  content = content.replace(/group-hover:text-slate-600 dark:text-slate-300/g, 'group-hover:text-slate-600 dark:group-hover:text-slate-300');
  content = content.replace(/dark:bg-slate-800 dark:bg-slate-950/g, 'dark:bg-slate-800');
  // one more check, `dark:border-slate-800 dark:border-slate-800`
  content = content.replace(/dark:border-slate-800 dark:border-slate-800/g, 'dark:border-slate-800');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

walk('./app', processFile);
walk('./components', processFile);
