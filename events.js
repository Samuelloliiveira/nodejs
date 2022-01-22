const {EventEmitter} = require('events')

const ev = new EventEmitter()

//para ele ouvir uma unica vez usamos once()
ev.on('saySomething', (argumento) => {
    console.log('Eu ouvi você', argumento)
})

ev.emit('saySomething', 'July')
ev.emit('saySomething', 'Mark')
ev.emit('saySomething', 'Samuel')
