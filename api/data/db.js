import { connect, Schema, model } from 'mongoose'

// const gameSchema = require('./models/game')

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const playerSchema = new Schema({
  name: { type: String },
  role: { type: String, default: '' },
})

const gameSchema = new Schema({
  owner: { type: String, required: true },
  status: { type: String, required: true },
  players: { type: [playerSchema], default: [] },
  created_at: { type: Date, default: Date.now },
})

var Game = model(process.env.MONGO_COLLECTION, gameSchema)

export default Game
