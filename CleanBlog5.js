const express = require('express');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

pp.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
    const blogs = await Blog.find({})
    res.render("index",{
      blogs
    });
  });
  
  app.get("/about", (req, res) => {
    res.render("about");
  });

  const postController = require('./controllers/postController');
app.get('/', postController.getAllPost);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.post('/posts/edit/:id', postController.updatePost);
app.get('/posts/delete/:id', postController.deletePost);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});