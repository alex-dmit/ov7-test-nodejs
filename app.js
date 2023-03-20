// @ts-check
const express = require('express')
const { findNums, findAllNums } = require('./findNums')
const app = express()

// API
// Route 
// - Method GET 
// - Url http://localhost:3333/find-nums/1000000
app.get('/find-nums/:num', (req, res) => {
    if (Number.isInteger(+req.params.num)) {
        const result = findNums(+req.params.num)
        if (result) {
            res.send({ result })
        } else {
            res.status(400).send({ message: 'Wrong number' })
        }
    } else {
        res.status(400).send({ message: 'Wrong number' })
    }
})

app.get('/find-all-nums/:numOfZeros', (req, res) => {
    if (Number.isInteger(+req.params.numOfZeros)) {
        const result = {
            '10': [2, 5],
            '100': [4, 25],
            '1000': [8, 125],
            // ...
        }
        res.send({ result })
    } else {
        res.status(400).send({ message: 'Wrong number' })
    }
})

app.listen(3333)