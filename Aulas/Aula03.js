// Node js -> definindo rotas 

const http = require('http')
const url = require('url')
const porta = 3000  // definimos a porta - number
const host = '127.0.0.1'  // definimos o endereço de ip - string


const servidor = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    if(request.url=='/') {
        response.write('<h1>Bem vindo a nossa pagina</h1>')
    } else if (request.url=='/canal') {
        response.write('<h1>Bem vindo ao nosso canal</h1>')
    } else if (request.url=='/curso') {
        response.write('<h1>Bem vindo a nossa aula</h1>')
    } else if (request.url=='/curso/node') {
        response.write('<h1>Voce chegou ao nosso curso de node</h1>')
    }

    response.end()
})

servidor.listen(porta, host, () => {console.log('O servidor está rodando!!! Ok!')})