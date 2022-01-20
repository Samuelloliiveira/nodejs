// MÓDULOS NATIVOS
const path = require('path') 
console.log(path.basename(__filename))

// MEUS MÓDULOS
const myModule = require('./exports')
console.log(myModule)