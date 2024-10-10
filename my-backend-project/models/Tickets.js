const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    code: { type: String, unique: true },
    purchase_datetime: { type: Date, default: Date.now },
    amount: Number,
    purchaser: String,
});

module.exports = mongoose.model('Ticket', TicketSchema);
