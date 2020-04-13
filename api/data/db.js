const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: '' },
})

const gameSchema = new mongoose.Schema({
  //   _id: mongoose.ObjectId,
  owner: { type: String, required: true },
  status: { type: String, required: true },
  players: { type: [playerSchema], default: [] },
  created_at: { type: Date, default: Date.now },
})

var Game = mongoose.model(process.env.MONGO_COLLECTION, gameSchema)

module.exports = Game
