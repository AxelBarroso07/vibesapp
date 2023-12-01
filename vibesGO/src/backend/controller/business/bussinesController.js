const { getLatitudeAndLongitude } = require('../../helper/getLatitudeAndLongitude');

const createBusiness = async (mySQLRepository, req, res) => {

    const {
        nombreNegocio,
        calle,
        numeroDeCalle,
        city,
        province
    } = req.body;

    console.log(req.body)

    const {
        latitude,
        longitude
    } = await getLatitudeAndLongitude(calle, numeroDeCalle, city, province);

    const query = 'INSERT INTO negocios SET nombreNegocio = ?, calle = ?, numeroDeCalle = ?, city = ?, province = ?, latitude = ?, longitude = ?';
    const arrayData = [nombreNegocio, calle, numeroDeCalle, city, province, latitude, longitude];

    try {
        await mySQLRepository.create(query, arrayData)
        return res.status(200).json({
            message: "Negocio creado exitosamente"
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear un negocio"
        });
    }
}

module.exports = {
    createBusiness
};
