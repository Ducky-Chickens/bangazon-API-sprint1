const { createWriteStream } = require('fs');
const { productTypes } =require('./data/prod-types');
const { generatePrograms } = require('./generators/training-program-faker');

// Create training-programs.json
let programs = generatePrograms();
let programStream = createWriteStream(`./data/training-programs.json`);
programStream.write(JSON.stringify(programs));