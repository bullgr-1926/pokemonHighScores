const PokemonHighScores = require("../models/pokemonHighScores");
const express = require("express");
const PokemonHighScoresRouter = express.Router();
PokemonHighScoresRouter.use(express.urlencoded({ extended: true }));

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
