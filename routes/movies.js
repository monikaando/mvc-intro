const express =  require("express");
const app = express();
const Movie = require("../models/movie");

app.get("/movie", (req,res)=> {
    Movie
        .find()
        .then((moviesData)=> {
            res.render("movies", {moviesHbs: moviesData});
        })
        .catch((err)=> {
            res.send("error");
        })
})

app.get("/movie/detail/:movieId", (req,res)=> {
    Movie
        .findById(req.params.movieId)
        .then((movieData)=> {
            debugger
            res.render("movie", {movieHbs: movieData});
        })
        .catch((err)=> {
            res.send("error");
        })
})
module.exports = app;