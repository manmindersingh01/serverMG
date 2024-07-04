const mongoose = require('mongoose');
require('dotenv').config();



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(process.env);

const cardSchema = new mongoose.Schema({
  name: String,
  cardNumber: String,
  expMonth: String,
  expYear: String,
  cvc: String,
});

const Card = mongoose.model('Card', cardSchema);
// export 
module.exports = Card;