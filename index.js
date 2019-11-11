const server = require('./api/server.js');

const PORT = 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
