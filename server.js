const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
// Listen on all interfaces by default. When printing the URL, prefer
// 'localhost' if the server is bound to 0.0.0.0 or :: so the link is
// directly clickable from the machine running the server.
const HOST = process.env.HOST || '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  const addr = server.address();
  const address = addr && addr.address ? addr.address : HOST;
  const port = addr && addr.port ? addr.port : PORT;
  const displayHost = (address === '::' || address === '0.0.0.0') ? 'localhost' : address;
  console.log(`Server running on port ${port}`);
  console.log(`Open: http://${displayHost}:${port}/`);
});