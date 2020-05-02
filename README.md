# Zoomwolves API

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=alert_status)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=bugs)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=code_smells)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=coverage)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=security_rating)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=sqale_index)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves_api&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves_api)

An online version of the classic social deduction game Werewolves. Built to support playing the game via a conferencing tool like zoom or jitsi.

# Hosting

- [Game hosting](http://zoomwolves-bucket.s3-website.eu-west-2.amazonaws.com/ 'Zoomwolves Game')
- [API hosting](http://3.9.162.97:3000/ 'Zoomwolves api')

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
