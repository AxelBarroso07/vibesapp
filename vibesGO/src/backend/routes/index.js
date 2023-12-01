const express = require('express');
const { createBusiness } = require('../controller/business/bussinesController');
const { getBussinesByDistance } = require('../controller/business/getBusinessByDistance');
const router = express.Router();

const { createUserController } = require('../controller/user/createUserController');


const vibesgoRoutes = (mySQLRepository) => {
    router.post('/api/usuarios', async (req, res) => {
        return await createUserController(mySQLRepository, req, res);
    });

    router.post('/api/negocios', async (req, res) => {
        return await createBusiness(mySQLRepository, req, res);
    });

    router.post('/api/getStoresByUserUbication', async(req,res) => {
        return await getBussinesByDistance(mySQLRepository, req, res)
    })

    return router;
};

module.exports = {
    vibesgoRoutes
};
