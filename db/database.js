const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:password@database-hw3.cm3pnnikjjcs.us-east-1.rds.amazonaws.com'
const pool = new Pool({
  connectionString,
})

const client = new Client({
  connectionString,
})

client.query('SELECT VERSION();', (err, res) => {
  client.end();
  version = res.rows;
});

module.exports = pool;