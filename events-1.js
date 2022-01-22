//Herdando do EventEmitter - a base para outros módulos

//util é outro módulo do core do node
const { inherits } = require('util')
const {EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

//herdamos para o nosso Character todas as funções do EventEmitter
//funciona para outros módulos
inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')