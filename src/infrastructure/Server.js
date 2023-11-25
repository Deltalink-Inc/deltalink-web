import express from "express";

const server = express()
const port = 3000

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.post('/unlock-trunck', (req, res) => {
    const statusCode = 200;

    res.status(statusCode).send({
        statusCode: statusCode,
        message: 'Recebemos sua requisição com sucesso!'
    });

    console.log(req.body)
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//firts model of API 