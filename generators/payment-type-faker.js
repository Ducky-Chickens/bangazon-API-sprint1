'use strict';

const faker = require('faker')
const { createWriteStream } = require('fs');

const generatePaymentTypes = () => {
  let paymentTypes = [];

  for (let i = 0; i < 20; i ++) {
    let type = faker.hacker.noun();
    let accountNumber = faker.finance.account();
    let customerId = faker.random.number({min: 1, max: 20});
    paymentTypes.push({type, accountNumber, customerId});
  }

  return { paymentTypes };
}

let payments = generatePaymentTypes();
let paymentStream = createWriteStream(`./data/payment-types.json`);
paymentStream.write(JSON.stringify(payments));