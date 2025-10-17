const port = 8000;
const http = require('http');


const server = http.createServer((req, res) => {
  const now = new Date();
  const responseText = `Data e hora atuais: ${now.toString()}`;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(responseText);
});


server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});