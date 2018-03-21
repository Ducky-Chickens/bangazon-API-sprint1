// generate training programs
'use strict'; 
const faker = require('faker');
const { createWriteStream } = require('fs');

const generatePrograms = () => {
  let programs = [];

  for(let i=0; i<8; i++){
    let programName = faker.name.jobType();
    let startDate = faker.date.recent().toLocaleDateString();
    let endDate = faker.date.future().toLocaleDateString();
    let maxAttendees = faker.random.number();

    programs.push({
      "program_name": programName,
      "start_date": startDate,
      "end_date": endDate,
      "max_attendees": maxAttendees,
    })
  }
  return programs;
}

let programs = generatePrograms();
let programStream = createWriteStream(`../data/training-programs.json`);
programStream.write(JSON.stringify(programs));