const mongoose = require('mongoose')
/**
 * Product model schema.
 */
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: { type: [Object], required: true },
})

module.exports = mongoose.model('game', gameSchema)
