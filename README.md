# Zoomwolves - back-end api

An online version of the classic social deduction game Werewolves using Node. Built to support playing the game via a conferencing tool like zoom.

## Add a .env file

```
MONGO_URI=mongodb://localhost:27017/zoomwolves
MONGO_COLLECTION=Games
```

## Build

npm install

## Test

npm test

## Run

npm start

# Endpoints

| **Verb** | **Endpoint**         | **Description**                                |
| -------- | -------------------- | ---------------------------------------------- |
| GET      | /api/games           | Retrieves list of games.                       |
| POST     | /api/games           | Registers a new game on the server             |
| GET      | /api/games/:id       | Find a single game using the id                |
| POST     | /api/players/:gameid | Registers a player to a game using the game id |
