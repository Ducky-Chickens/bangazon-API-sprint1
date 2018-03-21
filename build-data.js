const { createWriteStream } = require('fs');
const { generateComputers } = require('./generators/computer-faker');

let computers = generateComputers();
let compStream = createWriteStream(`./data/computers.json`);
compStream.write(JSON.stringify(computers));

