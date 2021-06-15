const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env'});
mongoose.set('runValidators', true);

const conectarDB = async () => {
    
    try {
        await mongoose.connect((process.env.DB_MONGO), {
            
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
            
        })
    } catch (error) {
        console.log(error);
        process.exit(1); //Parar el servicio
    }
    console.log('Base de Datos conectada....')
}

module.exports = conectarDB;