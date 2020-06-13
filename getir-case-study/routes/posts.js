const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//SUBMIT A POST
router.post('/', async (req, res) => {
    //console.log(req.body);
    const post = new Post({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        minCount: req.body.minCount,
        maxCount: req.body.maxCount
    });
    try{

    const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;

/*
//SPECIFIC POST (may be with the url) (bak mesela id sini alıp url sonuna koyunca getleyince onu sadece onu getirtiyor)(postId dynamictir.)
router.get('/:postId', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err) {
        res.json({message: err});
    }
});

//Delete Post
router.delete('/:postId', async (req, res) => {
    try{
    const removedPost = await Post.remove({_id: req.params.postId})
    //"_" çünkü mongonun kendisinde id den önce _ var
    res.json(removedPost);
    } catch(err) {
        res.json({message: err});
    }
});

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId},
        {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch(err) {
        res.json({message: err});
    }
});
*/



    //post.save()
    //.then(data => {
    //   res.json(data);
    //})
    //.catch(err => {
    //    res.json({message: err})
   //})