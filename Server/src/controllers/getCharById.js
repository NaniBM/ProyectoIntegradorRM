const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async(req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios.get(URL+id)
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.status(200).json(character)
    } catch (error) {
        if(error.response.status === 404) {
            res.status(404).send('Not found')
        } else {
            res.status(500).json(error.message)
        }
    }
}


// const getCharById = (req, res) => {
//     const { id } = req.params
//     axios.get(URL+id).then((response)=>{
//         const { data } = response
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status
//         }
//         res.status(200).json(character)
//     }).catch((error) => {
//         if(error.response.status === 404) {
//             res.status(404).send('Not found')
//         } else {
//             res.status(500).json({message: error.message})
//         }
//     })
// }

module.exports = getCharById;