const EventEmitter = require('events')
require('events').EventEmitter.defaultMaxListeners = 15

class GameMonitor extends EventEmitter {}

module.exports = GameMonitor
