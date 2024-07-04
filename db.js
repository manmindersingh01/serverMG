const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


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