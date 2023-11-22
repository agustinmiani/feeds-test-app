const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


app.post('/feeds', (req, res) => {
  console.log("El body que recibimos fue:" + JSON.stringify(req.body));
  //res.status(200).json({ success: true });
  res.status(200).json({ fail: false });
});

app.get('/ping', (req, res) => {
    res.status(200).json("pong");
  });

app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});

