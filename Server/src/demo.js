const axios = require('axios')
const url = 'https://rickandmortyapi.com/api/character'

async function getData () {
    const { data } = await axios(url)
    return data
}
const data = getData()
console.log(data)