import { Schema, model } from 'mongoose'
/**
 * Product model schema.
 */
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

export default model('game', gameSchema)
