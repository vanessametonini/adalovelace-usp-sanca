const http = require('http')
let escolas = [
    {
        nome: `caelum`,
        endereco: `rua x`
    },
    {
        nome: `USP Sao Carlos`,
        endereco: `rua ahsuhasu`
    },
    {
        nome: 'UFSCar',
        endereco: 'Av. Jajaj'
    }
]




http.createServer(function(request, response){

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }


    response.writeHead(200, headers);
    response.end(JSON.stringify(escolas));



}).listen(3000,'localhost');

//console.log(http);


console.log("Servidor rodando na porta 3000")