const express = require ('express');
const app = express ();
const port = 8031;
const hostname = '127.0.0.1';

app.listen(port, hostname, function() {
    console.log(`Servidor iniciado com sucesso. Host: ${hostname}. Port: ${port}`);
});

//URL: http://localhost:8031/notas/:nota1/:nota2/:nota3
app.get('/notas/:nota1/:nota2/:nota3', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    let nota1 = parseFloat(req.params.nota1)
    let nota2 = parseFloat(req.params.nota2)
    let nota3 = parseFloat(req.params.nota3)
    let media 
    let mensagem
 
    media = (nota1+nota2+nota3)/3

    if (media<3){
        mensagem = "Reprovado"      
    }

    else if (media>=3 && media<7){
        mensagem = "Exame"
    }

    else if (media>=7 && media<=10){
        mensagem = "Aprovado"
    }
    res.send(mensagem)
})