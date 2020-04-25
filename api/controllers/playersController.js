// Deprecated
function playersController(Game) {
  function post(req, res) {
    console.log('Received players POST request')
    const clientInfo = req.body
    if (!req.body.name) {
      res.status(400)
      return res.send('Name is required')
    }

    Game.findById(req.params.id, (err, game) => {
      if (err) throw err

      game.players.push({ name: clientInfo.name })
      game.save((error) => {
        if (error) throw error

        const player = game.players.find((item) => {
          return item.name === clientInfo.name
        })
        res.setHeader('Content-Type', 'application/json')
        // eslint-disable-next-line no-underscore-dangle
        return res.send({ id: player._id })
      })
    })
  }
  return { post }
}
module.exports = playersController
