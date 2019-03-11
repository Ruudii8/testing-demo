const conf = require ("./built/config");

conf.loadConfig('./test.json')
.then( () => {
    console.log(conf.config);
    const ui = require('./built/ui/express.js');
    const socket = require( './built/socket/socket.js');
    const iobroker = require('./built/iobroker/iobroker.js');
})


