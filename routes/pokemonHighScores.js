const PokemonHighScores = require("../models/pokemonHighScores");
const express = require("express");
const PokemonHighScoresRouter = express.Router();
PokemonHighScoresRouter.use(express.urlencoded({ extended: true }));

PokemonHighScoresRouter.get("/", (req, res) => {
  res.send(`Welcome to our Pokemon Leaderboard API.\n
  Instructions:
  Get the leaderboard: /game/leaderboard
  Post a new leaderboard entry: /game/save
  Clear the leaderboard: game/leaderboard_clear
  Register new user: /users/register
  User login: /users/login
  Show user information: /user
  `);
});

PokemonHighScoresRouter.get("/game/leaderboard", (req, res) => {
  PokemonHighScores.find()
    .then((highScores) => res.json(highScores))
    .catch((err) => res.json(err));
});

PokemonHighScoresRouter.post("/game/save", (req, res) => {
  PokemonHighScores.create({
    firstPokemon: req.body.firstPokemon,
    secondPokemon: req.body.secondPokemon,
    win: req.body.win,
    score: req.body.score,
    rounds: req.body.rounds,
    playerName: req.body.playerName,
  })
    .then((highScores) => res.json(highScores))
    .catch((err) => res.json(err));
});

PokemonHighScoresRouter.delete("/game/leaderboard_clear", (req, res) => {
  PokemonHighScores.deleteMany({ playerName: { $exists: true } })
    .then(() => res.json("Leaderboard cleared"))
    .catch((err) => res.json(err));
});

module.exports = PokemonHighScoresRouter;
