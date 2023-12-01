const { getLatitudeAndLongitude } = require('../../helper/getLatitudeAndLongitude');


const createUserController = async (mySQLRepository, req, res) => {

    const {
        nombre,
        contrasenia,
        email,
        calle,
        numeroDeCalle,
        apellido,
        ciudad,
        provincia
    } = req.body;

    const { latitude, longitude } = await getLatitudeAndLongitude(calle, numeroDeCalle, ciudad, provincia)

    const query = 'INSERT INTO usuarios SET nombre = ?, contrasenia = ?, email = ?, apellido = ?, calle = ?, latitude = ?, longitude = ?, numeroDeCalle = ?, city = ?, province = ?';
    const arrayData = [nombre, contrasenia, email, apellido, calle, latitude, longitude, numeroDeCalle, ciudad, provincia]

    try {
        await mySQLRepository.create(query, arrayData)
        res.status(200).json({message : "Usuario creado exitosamente.", data: { latitude, longitude }})
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Ocurrió un error al crear el usuario"})
    }
}

module.exports = {
    createUserController
}