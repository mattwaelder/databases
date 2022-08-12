var db = require('../db');

module.exports = {


//db.connection.execute('INSERT INTO test (id) values(?);', [1], (err, results, fields) => console.log(results));

  getAll: function (callback) {
    db.connection.execute(
      'SELECT id, content FROM messages;',
      (err, results, fields) => {
        console.log('ran query, returning:', results);
        err ? callback(err) : callback(null, results)
      }
    );
  }, // a function which produces all the messages

  //gets called by post in controller
  create: function (data, callback) {
    //hard coded addition to db/id
    //db.connection.execute
    db.connection.execute(
      'INSERT INTO messages (content) values(?);',
      //'SELECT * FROM test;',
      [data.content],
      //(err, results, fields) => console.log(results);
      (err, results, fields) => err ? callback(err) : callback(null, results)
    );
  } // a function which can be used to insert a message into the database
};
