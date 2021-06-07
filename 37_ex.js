
const express = require ('express');
const path = require ('path');
const app = express ();
const port = 8030;
const hostname = '127.0.0.1';
const dir = path.join(__dirname, 'css');

app.use(express.static(dir));

app.listen(port, hostname, function() {
    console.log(`Servidor iniciado com sucesso. Host: ${hostname}. Port: ${port}`);
});

// URL: http://localhost/
app.get('/', function(req, res){
    res.send(dir);
});

//URL: http://localhost:8030/celsius/fahrenheit/:temperatura
app.get('/celsius/fahrenheit/:temperatura', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    let celsius = parseFloat(req.params.temperatura);
    let fahrenheit = (celsius * 1.8) + 32.

    let pagina = `
    <html>
    <head>
    <title>Conversor de Temperatura</title>
    <link rel='stylesheet' href='/pag.css'>
    </head>
    <body>
    <h1>Conversor de Temperatura</h1>
    <div class='celsius'> Celsius = ${celsius}</div>
    <div class='fahrenheit'>Fahrenheit = ${fahrenheit}</div>
    </body>
    </html>`;

    res.send(pagina);
});
