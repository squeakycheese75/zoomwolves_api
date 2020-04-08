# Zoomwolves - back-end api

An online version of the classic social deduction game Werewolves using Node. Built to support playing the game via a conferencing tool like zoom.

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
| GET      | /api/players/:id     | Find a player using their id                   |
| POST     | /api/players/:gameid | Registers a player to a game using the game id |
