var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('received', req.method, 'data:', req.body)
    models.messages.getAll((err, data) => {
      res.send(data);
    })
  }, // a function which handles a get request for all messages

  //this calls create in model(for msgs)
  post: function (req, res) {
    console.log('received', req.method, 'data:', req.body)
    models.messages.create(req.body, (err, data) => {
      res.send(data);
    });
    // extract json data from req
    // invoke models.create with (json, callback)
    // the call back writes data to the response
  } // a function which handles posting a message to the database
};
