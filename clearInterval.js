const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

//cancela o intervalo depois de 3 segundos
setTimeout(() => clearInterval(interval), 3000)