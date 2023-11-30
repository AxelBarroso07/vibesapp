// const dataController = async (mySQLRepository, req, res) => {
//     const {
//         nombreNegocio,
//         calle,
//         numeroDeCalle,
//     } = req.body;

//     try {
//         console.log('Datos recibidos en el controlador:', req.body);

//         const selectQuery = 'SELECT * FROM negocios WHERE nombreNegocio = ? AND calle = ? AND numeroDeCalle = ?';
//         const negocio = await mySQLRepository.query(selectQuery, [nombreNegocio, calle, numeroDeCalle]);

//         console.log('Resultado de la consulta:', negocio);

//         if (negocio.length > 0) {
//             return res.status(200).json({
//                 message: "Datos de negocio obtenidos exitosamente",
//                 negocio: negocio[0]
//             });
//         } else {
//             return res.status(404).json({
//                 message: "No se encontró el negocio"
//             });
//         }
//     } catch (error) {
//         console.error('Error en el controlador de datos:', error);
//         return res.status(500).json({
//             message: "Error al obtener datos del negocio",
//             error: error.message
//         });
//     }
// };


// module.exports = {
//     dataController
// };
