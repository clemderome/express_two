const express = require('express');
const connection = require('./conf');

const app = express();
const port = 3000;

app.get('/api/movie', (req, res) => {
   connection.query('SELECT * from movie', (err, results) => {
      if (err) {
       res.status(500).send('Erreur lors de la récupération des films');
      } else {
        res.json(results);
      }
    });
  });

app.get('/api/movie/name', (req, res) => {
    connection.query('SELECT name FROM movie', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des noms de films');
      } else {
        res.json(results);
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
  