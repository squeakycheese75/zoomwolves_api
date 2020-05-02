# Zoomwolves API

An online version of the classic social deduction game Werewolves. Built to support playing the game via a conferencing tool like zoom or jitsi.

# Hosting

[Game hosting](http://zoomwolves-bucket.s3-website.eu-west-2.amazonaws.com/ 'Zoomwolves Game')
[API hosting](http://3.9.162.97:3000/ 'Zoomwolves api')

## Add a .env file

Add these 2 lines to connect to you MongoDb instances.

```
MONGO_URI=mongodb://localhost:27017/zoomwolves
MONGO_COLLECTION=games
```

If you're going to build and run with docker-compose then you can't use localhost.

```
MONGO_URI=mongodb://mongo:27017/zoomwolves
PORT=5000
```

## Build

```
npm install
```

## Test

```
npm test
```

## Run

```
npm start
```

# Endpoints

| **Verb** | **Endpoint**                             | **Description**                                |
| -------- | ---------------------------------------- | ---------------------------------------------- |
| GET      | /api/games/:id                           | Find a single game using the id                |
| POST     | /api/games                               | Registers a new game on the server             |
| POST     | /api/games/:id/close                     | Close the game and cast the characters.        |
| POST     | /api/players/:gameid                     | Registers a player to a game using the game id |
| GET      | /api/characters/:gameId/player/:playerId | Gets a player casting data                     |

# Docker

```
docker-compose up -d
```

## Dependancies

[MongoDb](https://docs.mongodb.com/manual/installation/)
