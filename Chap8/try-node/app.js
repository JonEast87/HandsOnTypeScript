const fs = require('fs');

// Older non-async style of Node

fs.writeFile('test.txt', 'Hello World', () => {
   fs.readFile('test.txt', 'utf8', (err, msg) => {
      console.log(msg);
   });
});