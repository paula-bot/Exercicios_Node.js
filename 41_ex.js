const express = require ('express');
const app = express ();
const port = 8031;
const hostname = '127.0.0.1';

app.listen(port, hostname, function() {
    console.log(`Servidor iniciado com sucesso. Host: ${hostname}. Port: ${port}`);
});

//URL: http://localhost:8031/:peso/:altura
app.get('/:peso/:altura', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    let peso = parseFloat(req.params.peso)
    let altura = parseFloat(req.params.altura)
    let imc 
    let mensagem
 
    imc = peso/(altura*altura)

    if (imc<18.5){
        mensagem = "Abaixo do Peso"      
    }

    else if (imc>=18.6 && imc<24.9){
        mensagem = "Peso Ideal (parabéns)"
    }

    else if (imc>=25.07 && imc<=29.9){
        mensagem = "Levemente acima do peso"
    }

    else if (imc>=30,0 && imc<34,9){
        mensagem = "Obesidade grau I"
    }
    
        else if (imc>=35,0 && imc<39,9){
        mensagem = "Obesidade grau II (severa)"
    }
    
        else if (imc>= 40){
        mensagem = "Obesidade III (mórbida)"
    }
    res.send(mensagem)
})