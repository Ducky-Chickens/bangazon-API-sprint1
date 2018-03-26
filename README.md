# bangazon-API-sprint1

Basic Project Setup

```
// To run the program, first install dependencies

npm i 

// Then build local SQL database and populate

npm build tables

// Run a local server to access the data in browser

http-server

```

# Computer
-----
- _GET_ You can access a list of all computers by running a GET call to http://localhost:8080/computers
  - You can get the information on a single computer by runnning a GET call to http://localhost:8080/computers/{computerID}
> Note you need to have a computer unique ID number to receive information

- _PUT_ You can update the info on a specific computer by running a PUT call to http://localhost:8080/computers/{computerID}

  - Running a PUT requires that you submit the desired column and value to be edited.
  - Example: 
  ```
  { "column": "decomission_date", 
  "value": "2018/03/20" }
  ```
- _DELETE_ You can delete a computer by running a DELETEcall to http://localhost:8080/computers{computerID}

- _POST_ You can enter a new computer by running a Post call to http://localhost:8080/computers

  - You must send a purchase_date to POST a new computer.
  - Example: { "purchase_date": "YYYY/DD/MM" }

# Employees ERD

![Employees ERD](/ERD/employees-better.png)
# Customers ERD

![Customers ERD](/ERD/customers-products_v2.png)
