const express = require('express');
const { bussinesController } = require('../controller/bussinesController');
const router = express.Router();

const { createUserController } = require('../controller/createUserController');
// const { dataController } = require('../controller/dataController');

const vibesgoRoutes = (mySQLRepository) => {
    router.post('/api/usuarios', async (req, res) => {
        return await createUserController(mySQLRepository, req, res);
    });

    router.post('/api/negocios', async (req, res) => {
        return await bussinesController(mySQLRepository, req, res);
    });

    // router.get('/api/negocios/datos', async (req, res) => {
    //     return await dataController(mySQLRepository, req, res);
    // });

    return router;
};

module.exports = {
    vibesgoRoutes
};
