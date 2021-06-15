const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        validate:{
            validator: function (v) {
                return /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(v);    
            },
            message: props => `\n\n ${props.value} no es un nombre válido\n\n`
        },
        minLength: [3, '\n\n\tEl campo debe tener mínimo 3 caracteres\n\n'],
        maxLength: [20, `\n\n\tEl campo debe tener al menos 20 caracteres\n\n`],
        required: [true, '\n\n\tEl campo nombre es requerido\n\n']
    },
    apellidos: {
        type: String,
        validate:{
            validator: function (v) {
                return /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(v);    
            },
            message: props => `\n\n${props.value} no es un nombre válido\n\n`
        },
        minLength: [3, '\n\n\tEl campo debe tener mínimo 3 caracteres\n\n'],
        maxLength: [20, `\n\n\tEl campo debe tener al menos 20 caracteres\n\n`],
        required: [true, '\n\n\tCampo Apellidos requerido\n\n']
    },
    edad: {
        type: Number,
        min: [0, '\n\n\tEdad mínima es 0, usted ha introducido {VALUE}\n\n'],
        max: [125, '\n\n\tEdad máxima es 125, usted ha introducido {VALUE}\n\n'],
        required: [true, '\n\n\tCampo edad requerido\n\n']
    },
    dni: {
        type: String,
        validate:{
            validator: function (v) {
                return /^\d{8}[a-zA-Z]$/.test(v);    
            },
            message: props => `\n\n\t${props.value} no es un DNI válido. \n\tIntroduzca 8 digitos y una letra a continuación. \n\tEje: 01234567l\n`
        },
        required: [true, '\n\n\tDNI requerido\n\n']
    },
    cumpleanos: {
        type: Date,
        min: ['1895-06-02','\n\n\tNo permitida una edad de fecha inferior a 1895/06/02\n\n'],
        max: [Date.now(),'\n\n\tNo permitida una edad de fecha anterior o igual a hoy.\n\tHa seleccionado:{VALUE}\n\n'],
        required: [true, '\n\n\tCampo fecha de cumpleaños requerida\n\n']
    },
    colorFavorito: {
        type: String,
        enum:{
            values: [
                'Negro',
                'Azul',
                'Marrón',
                'Gris',
                'Verde',
                'Naranja',
                'Rosa',
                'Púrpura',
                'Rojo',
                'Blanco',
                'Amarillo'],
            message: '\n\n\t{VALUE} color no definido\n\n'
        } ,
        required: [true, '\n\n\tCampo color favorito requerido\n\n']
    },
    sexo: {
        type: String,
        enum:{
            values: [
                'Hombre',
                'Mujer',
                'Otro',
                'No Especificado'],
            message: '\n\n\t{VALUE} no definido para sexo\n\n'
        } ,
        required: [true, '\n\n\tCampo sexo requerido\n\n']
    },
    notas: {
        type: String
    },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);