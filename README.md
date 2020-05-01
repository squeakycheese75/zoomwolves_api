# Zoomwolves - back-end api

An online version of the classic social deduction game Werewolves. Built to support playing the game via a conferencing tool like zoom or jitsi.

## Add a .env file

```
MONGO_URI=mongodb://localhost:27017/zoomwolves
MONGO_COLLECTION=games
```

or if using the docker-compose

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

## Dependancies

[MongoDb](https://docs.mongodb.com/manual/installation/)

# Docker

```
docker-compose up -d
```
