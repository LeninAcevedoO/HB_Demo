const { ApiResponse } = require("./interfaces.model.js");
const { BigQuery } = require('@google-cloud/bigquery');

//#region General

const pruebaDeConexion = (req, res) => {
    return res.json({ Exito: "true", mensaje: "Operación exitosa", Data: {} });
}

const getDashboard = async (req, res) => {
    try {
        const bigquery = new BigQuery();
        // const pool = await getConnection()
        // const result = await pool.request()
        //     .input('EscuelaId', req.body.EscuelaId)
        //     .execute(`spr_sa_getDashboard`);
        const query = `SELECT glb_id, education_level, county_fips, rural_urban_score, previous_soc_code, previous_soc_title, 
        previous_soc_category, recommended_soc_code, recommended_soc_title, recommended_soc_category, recommendation_rank_revised, mean_quarterly_wage_hourly, 
        training_type, program_id, program_degree_level, program_name, program_length_weeks, training_success_rate, create_timestamp 
        FROM wre-poc.WREdemo.stg_job_fabricator;`;
        const options = {
            query: query,
            location: 'US',
        };
        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();
        return ApiResponse(rows, res)
    } catch (e) {
        console.log(e)
        return ApiResponse(null, res, 'Error al obtener el dashboard')
    }
}

const login = async (req, res) => {
    try {
        const bigquery = new BigQuery();
        const query = `SELECT * FROM WREdemo.ods_login WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
        const options = {
            query: query,
            location: 'US',
        };
        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();
        if (rows.length <= 0)
            return res.status(401).json({ Exito: "false", mensaje: "Invalid email/password", Data: {} })
        else
            return ApiResponse(rows, res)
    } catch (e) {
        console.log(e)
        return ApiResponse(null, res, 'Error al obtener el dashboard')
    }
}

const getClaims = async (req, res) => {
    try {
        const bigquery = new BigQuery();
        const query = `SELECT * FROM WREdemo.stg_claims WHERE id_person = ${req.params.id} order by id_claim asc;`;
        const options = {
            query: query,
            location: 'US',
        };
        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();
        return ApiResponse(rows, res)
    } catch (e) {
        console.log(e)
        return ApiResponse(null, res, 'Error al obtener los claims')
    }
}

const getOtherRecommendations = async (req, res) => {
    try {
        let table;
        if (req.params.idUser == 1) table = 'Medical Assistants';
        if (req.params.idUser == 2) table = 'Structural Metal Fabricators and Fitters';
        else table = 'First-Line Supervisors of Retail Sales Workers';
        const bigquery = new BigQuery();
        const query = `SELECT * FROM WREdemo.ods_jobs_all
                        WHERE previous_soc_title = '${table}'`;
        const options = {
            query: query,
            location: 'US',
        };
        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();
        return ApiResponse(rows, res)
    } catch (e) {
        console.log(e)
        return ApiResponse(null, res, 'Error al obtener los claims')
    }
}

const getJobDetails = async (req, res) => {
    try {
        const bigquery = new BigQuery();
        const query = `SELECT * FROM WREdemo.ods_jobs_all
                        WHERE recommended_soc_code = ${req.params.idJob} LIMIT 1`;
        const options = {
            query: query,
            location: 'US',
        };
        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();
        return ApiResponse(rows, res)
    } catch (e) {
        console.log(e)
        return ApiResponse(null, res, 'Error al obtener los claims')
    }
}

//#endregion

module.exports = {
    pruebaDeConexion, getDashboard, login, getClaims, getOtherRecommendations, getJobDetails
}