const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/allpokemon', (req,res)=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response)=>{
        let array = []
        let data = response.data.results
        data.map((item)=>{
            return array.push(item)
        })
        res.send(array)
    })
    .catch(err => console.log(err))
})

app.get('/pokemon/:url',(req,res)=>{
    let url = req.params.url
    axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
    .then((response)=>{
        let data = response.data
        let abilities = []
        let stats = []
        data.abilities.map(item=> abilities.push(item))
        data.stats.map(item=>stats.push(item))
        data = {
            name:data.name,
            height:data.height,
            weight:data.weight,
            experience:data.base_experience,
            abilities:abilities
        }
        // console.log(data)
        res.send(data)
    })
    .catch(err=>console.log(err))
})

app.listen(4000, null, () => console.log('Listening on http://localhost:4000'))