const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  // Other tag-related fields
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;