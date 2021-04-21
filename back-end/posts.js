const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();


const users = require("./user.js");
const User = users.model;
const validUser = users.valid;

const postSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    book: String,
    title: String,
    review: String,
    created: {
      type: Date,
      default: Date.now
    },
  });
  
  const Post = mongoose.model('Post', postSchema);

  router.post("/", validUser, async (req, res) => {
    const post = new Post({
      user: req.user,
      book: req.body.book,
      title: req.body.title,
      review: req.body.review,
    });
    try {
      await post.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  router.get("/", validUser, async (req, res) => {
    // return photos
    try {
      let posts = await Post.find({
        user: req.user
      }).sort({
        created: -1
      }).populate('user');
      return res.send(posts);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  router.get("/all", async (req, res) => {
    try {
      let posts = await Post.find().sort({
        created: -1
      }).populate('user');
      return res.send(posts);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  module.exports = {
    model: Post,
    routes: router,
  }