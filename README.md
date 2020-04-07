# Zoomwolves - back-end api

An online version of the classic social deduction game Werewolves using Node. Built to support playing the game via a conferencing tool like zoom.

## Build

npm install

## Test

npm test

## Run

npm start

# Endpoints

| **Verb** | **Endpoint**    | **Description**                                       |
| -------- | --------------- | ----------------------------------------------------- |
| POST     | /api/client     | Registers a new client application on the game server |
| POST     | /api/player     | Create a new game                                     |
| POST     | /api/player/:id | Join an existing game                                 |
