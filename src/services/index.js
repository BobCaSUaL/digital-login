const path = require('path');
const express = require('express');
var cors = require('cors');
const config = require('./config');


const app = express();
app.use(cors());
app.use(require('serve-static')(config.publicDirectory));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('./auth').middleware);

app.get('/login', (req, res) => {
  res.send(req.user);
});

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
  console.log(`configuration ${JSON.stringify(config, null, 2)}`);
});
