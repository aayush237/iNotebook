const mongoose = require("mongoose");


main().catch(err => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect('mongodb://127.0.0.1:27017/notebookDB',{ useNewUrlParser: true});
}

module.exports = main;