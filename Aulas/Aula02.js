const http = require('http')


// 
http.createServer((request, response)  => {
    // request  = requisição // response = resposta

    response.writeHead(200, {
        'content-Type': 'text/plain'
    })

    response.write('Estudo Mário')
    response.end()
}).listen(1337)