const express = require('express')

//instanciando express e salvando em uma variável
const app = express()

//falando para o express que vamos usar ejs
app.set('view engine', 'ejs')// set é um método do express

//criando uma rota
//req é res = requisição e resposta
app.get('/', function (req, res) { //método http get

    //array de objetos
    const items = [
        {
            title: "D",
            message: "esenvolvendo aplicações de forma inteligente"
        },

        {
            title: "E",
            message: "screver código clean"
        },

        {
            title: "M",
            message: "uita pratica leva a um nível cada vez melhor"
        },

        {
            title: "A",
            message: " melhor forma de aprender é ensinando"
        },

        {
            title: "I",
            message: "ncrível como a tecnologia pode mudar vidas"
        },

        {
            title: "S",
            message: "empre manter o foco"
        },
    ]

    const subtitle = "É uma linguagem de modelagem para a criação de páginas HTML utilizando JS"

    //passando o array pela url
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    }) //render é um método do express
})

app.get('/sobre', function (req, res) {
    res.render('pages/about')
})

//listen fica ouvindo uma porta - rodando nosso server na máquina
app.listen(8080)
console.log('Rodando...')