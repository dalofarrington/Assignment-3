let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Movie = require('../models/movie');

// get --> Extract & read something
// post --> post something
// put --> Edit/Update some data
// delete --> Delete the data
// CRUD --> Create, Read, Update & Delete

// Get route for the read book list - Read Operation
router.get('/',async(req,res,next)=>{
    try
    {
        const MovieList = await Movie.find();
        //console.log(BookList);
        res.render('Movies/list',{
            title:'Movies',
            MovieList:MovieList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Movies/list',{
            error:'Error on server'
        })
    }
})

// Get route for displaying the Add Page - Create Operation
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Movies/add',{
            title:'Rate a Movie'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Movies/add',{
            error:'Error on server'
        })
    }
})
// Post route for processing the Add Page - Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
       
           let newMovie = Movie({
            "title":req.body.title,
            "genre":req.body.genre,
            "date":req.body.date,
            "details":req.body.details,
            "rating":req.body.rating
        })
        Movie.create(newMovie).then(()=>{
            res.redirect('/movies')
        });
    }
     catch(err)
    {
        console.log(err);
        res.render('Movies/add',{
            error:'Error on server'
        })
    }
})
// Get route for displaying the Edit Page - Update Operation
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const movieToEdit = await Movie.findById(id);
        res.render('Movies/edit',{
            title:'Edit Rating',
            movie:movieToEdit
        })
    }
    catch(err){
        console.log(err);
        next(err);
    }

})
// Post route for processing the Edit Page - Update Operation
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updatedMovie = Movie({
            "_id":id,
            "title":req.body.title,
            "genre":req.body.genre,
            "date":req.body.date,
            "details":req.body.details,
            "rating":req.body.rating
        });
        Movie.findByIdAndUpdate(id,updatedMovie).then(()=>{
            res.redirect('/movies');
        });
    }
     catch(err){
        console.log(err);
        next(err);
    }

})
// Get route for performing delete operation - Delete Operation
router.get('/delete/:id', async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting task');
  }
});
module.exports = router;