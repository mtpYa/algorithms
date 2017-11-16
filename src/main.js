const lib = require('./lib');
const CONSTS = require('./constants');

const fs = require('fs');
const path = require('path');


const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

if (!fs.existsSync(inputPath)) {
  fs.openSync(inputPath, 'w');
  fs.writeFileSync(inputPath, CONSTS.MESSAGE);
}

fs.readFile(inputPath, 'UTF-8', (err, data) => {
  lib.showMessage(`Read data: ${data}`);
  if (fs.existsSync(outputPath)) {
    console.error('Cannot write to file. File already exist');
  } else {
    fs.writeFile(outputPath, data);
    fs.unlink(inputPath);
  }
});

