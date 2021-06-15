const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Crear servidor
const app = express();

//environment variables
app.set('port', process.env.PORT || 3000);

// Conectar db
conectarDB();

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); //no hay */
app.use(cors());

app.use('/agenda/usuarios', require('./routes/usuario'));

app.listen(app.get('port'), ()=>{
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
})