const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonHighScores = new Schema({
  firstPokemon: {
    type: String,
    required: true,
  },
  secondPokemon: {
    type: String,
    required: true,
  },
  win: {
    type: Boolean,
    required: true,
  },
  rounds: {
    type: Number,
    required: true,
    min: 1,
  },
  score: {
    type: Number,
    required: true,
    min: 1,
  },
  playerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PokemonHighScores", PokemonHighScores);
