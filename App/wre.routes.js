const { Router } = require("express");
const {
    pruebaDeConexion, getDashboard, login, getClaims, getOtherRecommendations, getJobDetails
} = require("./wreRoutes.controller.js");

const router = Router();
const urlBase = '/api/wre-poc/v1';

router.get(`${urlBase}/ProbarConexion`, pruebaDeConexion);

router.get(`${urlBase}/dashboard`, getDashboard);
router.get(`${urlBase}/claims/:id`, getClaims);
router.get(`${urlBase}/jobs/recommendations/:idUser`, getOtherRecommendations);
router.get(`${urlBase}/jobs/:idJob`, getJobDetails);
router.post(`${urlBase}/login`, login);


module.exports = router;