// Creat web server
// 1. Import express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Define a port
const port = 8080;

// 4. Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// 6. Import comments data
const comments = require('./data/comments');

// 7. Define a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 8. Define a route for a comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: `Comment ${req.params.id} not found` });
  }
});

// 9. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});