const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const comments = [];

app.use(express.static(path.join(__dirname, 'public')));


app.post('/comments', (req, res) => {
  console.log('Received POST request to /comments');
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Comment text is required.' });
  }

  const newComment = {
    id: Date.now().toString(),
    text,
  };

  comments.push(newComment);
  res.status(201).json(newComment);
});

app.delete('/comments/:id', (req, res) => {
  console.log('Received DELETE request to /comments/:id');
  const commentId = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id === commentId);
  if (commentIndex === -1) {
    return res.status(404).json({ error: 'Comment not found.' });
  }

  comments.splice(commentIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
