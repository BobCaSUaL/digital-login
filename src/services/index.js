const express = require('express');
const app = express();
const port = process.env.DIGITAL_LOGIN_SERVICES_PORT || 3003;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})