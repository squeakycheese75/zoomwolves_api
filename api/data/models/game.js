const mongoose = require('mongoose')
/**
 * Product model schema.
 */
const playerSchema = new mongoose.Schema({
  name: { type: String },
  role: { type: String, default: '' },
})

const gameSchema = new mongoose.Schema({
  owner: { type: String, required: true },
  status: { type: String, required: true },
  players: { type: [playerSchema], default: [] },
  created_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('game', gameSchema)
