const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '3306',
  user: 'root1',
  password: '63155',
  database: '127.0.0.1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();