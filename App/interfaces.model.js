const ApiResponse = (poolResult, res, mensaje) => {
    try {
        if (poolResult)
            return res.status(200).json(jsonResult(true, null, poolResult))
        else if (poolResult.rowsAffected[0] > 0)
            return res.status(201).json(jsonResult(true, null, {}))
        else if (poolResult.rowsAffected[0] === 0)
            return res.status(404).json(jsonResult(true, null, null))
        else if (mensaje && !poolResult)
            return res.status(500).json(jsonResult(false, mensaje, {}))
        else
            return res.status(500).json(jsonResult(false, "Error general en el sistema", {}))
    } catch (e) {
        return res.status(500).json(jsonResult(false, "Error general en el sistema", {}))
    }
}

const jsonResult = (exito, mensaje, data) => {
    if (exito === true)
        return { Exito: "true", mensaje: "Operación exitosa", Data: data ? data : null }
    else {
        if (mensaje !== null)
            return { Exito: "false", mensaje: mensaje, Data: data }
        else
            return { Exito: "false", mensaje: "Error general en el sistema", Data: data }
    }
}

module.exports = {
    jsonResult, ApiResponse
}