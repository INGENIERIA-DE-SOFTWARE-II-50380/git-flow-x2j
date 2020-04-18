const express = require('express');
const app = express();

app.use(express.json())

app.post('/eco', (req, res) => {
  var echo = req.body.mensaje;
  res.status(200).send({
      status: true,
      mensaje: `escribiste: ${echo}`
  });
  console.log(`===> endpoint /echo con ${echo}`);
});

app.get('/aleatorio', (req, res) => {
  var echo = Math.random();
  console.log(`===> Número aleatorio: ${echo}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('simple API escuchando en el puerto: ', port);
});

app.get('/fecha', (req, res) => {

  <script>
  var f = new Date();
  document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
  </script>
  

});