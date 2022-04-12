const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://eukeo:Laxxmznegmkys1994!@cluster0.v7vod.mongodb.net/eukeo?retryWrites=true&w=majority');

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});