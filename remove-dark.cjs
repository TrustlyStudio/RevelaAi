const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      if (!file.includes('node_modules') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

try {
  const files = walk('./app').concat(walk('./components'));
  files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    const regex = /\s*dark:[a-zA-Z0-9_\-\/\[\]#]+/g;
    if (content.match(regex)) {
      const newContent = content.replace(regex, '');
      fs.writeFileSync(f, newContent);
      console.log('Cleaned', f);
    }
  });
} catch(e) {
  console.error(e);
}
