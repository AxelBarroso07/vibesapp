
const haversineFormule = require('../../helper/haversineFormule')

const getBussinesByDistance = async (MySqlRepository, req, res) => {

    const { latitude, longitude, radio } = req.body
    const query = 'SELECT * FROM `negocios`'
    const stores = await MySqlRepository.get(query)

    const storesToClosed = stores.filter((store) => {
        const distancia = haversineFormule(latitude, longitude, store.latitude, store.longitude);
        return distancia <= radio;
    });

    res.status(200).json({ data : storesToClosed })
}

module.exports = { 
    getBussinesByDistance
}