const mongoose = require('mongoose')

mongoose.connect(process.env.DB_ENSPOINT)
// 'mongodb://localhost:27017/zoomwolves'

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
})

const gameSchema = new mongoose.Schema({
  //   _id: mongoose.ObjectId,
  owner: { type: String, required: true },
  status: { type: String, required: true },
  players: { type: [playerSchema], default: [] },
  created_at: { type: Date, default: Date.now },
})

var Game = mongoose.model(process.env.DB_COLLECTION, gameSchema)

module.exports = Game
