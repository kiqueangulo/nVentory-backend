//DEPENDENCIES
const express = require("express");
const app = express();


//LISTEN
app.listen(3000, () => {
  console.log('server is listening');
});


//DIRECTIONS FOR SETTING UP HEROKU HERE.
// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });