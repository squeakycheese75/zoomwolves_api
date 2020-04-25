const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const castSchema = new mongoose.Schema({
  role: { type: String },
  team: { type: String },
  script: { type: [] },
})

const Cast = mongoose.model('cast', castSchema)

module.exports = Cast
