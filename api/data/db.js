// import { connect, Schema, model } from 'mongoose'
const mongoose = require('mongoose')

// const gameSchema = require('./models/game')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

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

var Game = mongoose.model(process.env.MONGO_COLLECTION, gameSchema)

module.exports = Game
