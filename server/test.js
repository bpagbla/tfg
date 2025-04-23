const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/usuarios') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola desde Node puro');
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Servidor Node puro en http://localhost:3000');
});
