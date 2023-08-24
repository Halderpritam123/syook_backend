// config/db.js
const mongoose = require('mongoose');

const connection=mongoose.connect("mongodb+srv://pritampritamhalder:pritam123@cluster0.k7ucy26.mongodb.net/syook?retryWrites=true&w=majority")
module.exports={connection}