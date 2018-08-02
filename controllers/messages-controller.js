const queries = require("../db/queries");
const helpers = require("../helpers/helpers.js");

let controller = {
  getAllMessages: function (req, res) {
    queries.getAllMessages()
      .then(messages => {
        res.json(messages);
      })
  },

  getFilteredMessages: function (req, res) {
    const sender = req.query.sender;
    const recipient = req.query.recipient;
    queries.getFilteredMessages(sender, recipient)
      .then(messages => {
        res.json(messages);
      })
  },

  addNewMessage: function(req, res) {
    const sender = req.body.sender;
    const recipient = req.body.recipient;
    const message = req.body.message;
    queries.addNewMessage(sender, recipient, message)
      .then(messages => {
        // console.log(messages);
        // res.json(messages);
        res.sendStatus(200);
      })
  }
}

// queries.thread(1)
//       .then(messages => {
//         // console.log(messages);
//         // res.json(messages);
//         // res.sendStatus(200);
//         console.log(messages);
//       })

// queries.thread(1)
// .then();
// .then(cool => { cool });


module.exports = controller;