// const should = require('should')
// const sinon = require('sinon')
// const playersController = require('../api/controllers/playersController')

// describe('Player Controller Tests', () => {
//   describe('Post', () => {
//     it('Should not allow a player with missing name to save', () => {
//       const Game = function (game) {
//         this.save = () => {
//           return { _id: '180c15d6-8215-4a6a-831f-faf90d257189' }
//         }
//       }
//       const req = {
//         body: {},
//       }
//       const res = {
//         status: sinon.spy(),
//         send: sinon.spy(),
//         json: sinon.spy(),
//       }

//       const controller = playersController(Game)
//       controller.post(req, res)

//       res.status.calledWith(400).should.equal(true)
//       res.send.calledWith('Name is required').should.equal(true)
//     })
//   })
// })

// describe('Player Controller Tests', () => {
//   describe('Post', () => {
//     it('Should not allow a player with missing name to save2', () => {
//       const Game = function (game) {
//         this.save = () => {
//           return { _id: '180c15d6-8215-4a6a-831f-faf90d257189' }
//         }
//         this.findById = (id) => {
//           return { _id: '180c15d6-8215-4a6a-831f-faf90d257189' }
//         }
//         // this.function findById(id) {
//         //   return { _id: '180c15d6-8215-4a6a-831f-faf90d257189' }
//         // }
//       }

//       const req = {
//         body: { name: 'Bobby' },
//         params: { id: '180c15d6-8215-4a6a-831f-faf90d257189' },
//       }
//       const res = {
//         status: sinon.spy(),
//         send: sinon.spy(),
//         json: sinon.spy(),
//       }

//       const controller = playersController(Game)
//       controller.post(req, res)

//       res.status.calledWith(200).should.equal(true)
//       // res.send.calledWith('Name is required').should.equal(true)
//     })
//   })
// })
