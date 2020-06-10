const express = require('express');
const connection = require('./conf');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/api/movie', (req, res) => {
  connection.query('SELECT * from movie', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/movie', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});
