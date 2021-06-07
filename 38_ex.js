
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

//URL: http://localhost:8030/triangulo/:lado1/:lado2/:lado3
app.get('/triangulo/:lado1/:lado2/:lado3', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    let lado1 = parseFloat(req.params.lado1);
    let lado2 = parseFloat(req.params.lado2);
    let lado3 = parseFloat(req.params.lado3);
    let tipo;

if (lado1 == lado2 && lado2 == lado3)
 tipo= 'triangulo equilátero';
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) 
 tipo= 'triangulo isóceles';
 else 
 tipo= 'triangulo escaleno';

    let pagina = `
    <html>
    <head>
    <title>Tipo de Triângulo</title>
    <link rel='stylesheet' href='/pag.css'>
    </head>
    <body>
    <h1>Tipo de Triângulo</h1>
    <div class='lado'> lado 1 = ${lado1}</div>
    <div class='lado'>lado 2= ${lado2}</div>
    <div class='lado'>lado 3= ${lado3}</div>
    <div class='tipo'>tipo = ${tipo}</div>
    </body>
    </html>`;

    res.send(pagina);
});
