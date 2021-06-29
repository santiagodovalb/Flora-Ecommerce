const chalk = require('chalk');

const startDb = require('./db')

const server = require('http').createServer();

const createApp = () => {
    const app = require('./app')
    server.on('request', app)
}

const createServer = () => {
    const PORT = 3001;

    server.listen(PORT, () => {
        console.log(chalk.magenta('Server listen on port', chalk.blue(PORT)))
    })
}


startDb
.then(createApp)
.then(createServer)
.catch(err => {
    console.log(chalk.red(err.stack))
    process.exit(1);
})


