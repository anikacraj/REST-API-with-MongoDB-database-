const express =require ('express');
const { getHome } = require('../Controllers/home.controllers');
const router =express.Router();

router.get("/home",getHome);

module.exports =router;