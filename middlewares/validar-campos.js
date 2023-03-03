const {response} = require('express');
const {validationResult} = require('express-validator');

//el next es una función que nosotros tenemos que llamar si el middleware se ejecuta exitosamente
const validarCampos = (req, res = response, next) => {

    // manejo de errores
    const errors = validationResult( req )
    if( !errors.isEmpty() ) {// si hay errores voy a hacer un retornar de la res.json({
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();
}

module.exports = {
    validarCampos,
}
