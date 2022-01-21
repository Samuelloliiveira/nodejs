const timeOut = 3000 //3000 = 3segundos
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)