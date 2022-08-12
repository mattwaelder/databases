var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat',
});

exports.connection = connection;
// connection.execute('SELECT id FROM test;', (err, results, fields) => console.log(results));
/*
connection.execute('INSERT INTO test (id) values(?);', [1], (err, results, fields) => console.log(results));

connection.execute('SELECT id FROM test;', (err, results, fields) => {
  err ? console.log('error', err) : console.log(results);
});
*/

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


