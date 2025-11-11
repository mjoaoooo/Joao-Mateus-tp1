const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))


app.get('/', (request, response) => {

    response.send('Página Inicial')
})
app.get('/sobre', (request, response) => {

    response.send('Servidor criado com Express!')
})
app.get('/hora', (request, response) => {

    const date = new Date()
    const dateNow = date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,

    })
    response.send('Hora atual: '+dateNow)

})

app.get('/saudacao/:nome', (request, response) => {
    response.send('olá, ' + request.params.nome)
})

app.listen(8080, () => {
    console.log("Rodando 8080")
})