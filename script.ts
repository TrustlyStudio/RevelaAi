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

  // Add dark variants where appropriate
  content = content.replace(/bg-white([^/])/g, 'bg-white dark:bg-slate-900$1');
  content = content.replace(/bg-slate-50(?!0)/g, 'bg-slate-50 dark:bg-slate-950');
  content = content.replace(/text-slate-900/g, 'text-slate-900 dark:text-white');
  content = content.replace(/text-slate-800/g, 'text-slate-800 dark:text-slate-100');
  content = content.replace(/text-slate-600/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/text-slate-500/g, 'text-slate-500 dark:text-slate-400');
  content = content.replace(/border-slate-200/g, 'border-slate-200 dark:border-slate-700');
  content = content.replace(/border-slate-100/g, 'border-slate-100 dark:border-slate-800');
  content = content.replace(/border-gray-200/g, 'border-gray-200 dark:border-slate-700');
  content = content.replace(/border-gray-100/g, 'border-gray-100 dark:border-slate-800');
  content = content.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-slate-900');
  content = content.replace(/bg-slate-100/g, 'bg-slate-100 dark:bg-slate-800');
  content = content.replace(/hover:bg-slate-50/g, 'hover:bg-slate-50 dark:hover:bg-slate-800');
  content = content.replace(/hover:bg-slate-100/g, 'hover:bg-slate-100 dark:hover:bg-slate-800');
  content = content.replace(/from-white/g, 'from-white dark:from-slate-900');
  content = content.replace(/to-white/g, 'to-white dark:to-slate-900');
  content = content.replace(/from-slate-50/g, 'from-slate-50 dark:from-slate-950');
  content = content.replace(/via-white/g, 'via-white dark:via-slate-900');
  content = content.replace(/via-slate-200/g, 'via-slate-200 dark:via-slate-800');
  content = content.replace(/shadow-sm/g, 'shadow-sm dark:shadow-none');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

walk('./app', processFile);
walk('./components', processFile);
