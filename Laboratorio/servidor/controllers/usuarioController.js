const Usuario = require("../models/Usuario");


exports.agregarUsuario = async (req, res, next) => {
    console.log(req.body);
    try {
        var usuario;
        usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
        next();

    } catch (error) {
        console.log(error);
        res.status(500).send('Se ha producido un error');
    }
}

exports.listarUsuarios = async (req, res, next) => {
    try {
        const listadoUsuarios = await Usuario.find();
        res.json(listadoUsuarios);
        next();

    } catch (error) {
        console.log(error);
        res.status(500).send('Se ha producido un error');
    }
}

exports.actualizarUsuarios = async (req, res) => {
    try {
        const { nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas } = req.body;
        let usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({ msg: 'No existe este Usuario' });
        }
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.edad = edad;
        usuario.dni = dni;
        usuario.cumpleanos = cumpleanos;
        usuario.colorFavorito = colorFavorito;
        usuario.sexo = sexo;
        usuario.notas = notas;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true, runValidators: true });
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Se ha producido un error');
    }
}

exports.obtenerUsuario = async (req, res, next) => {
    try {

        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'No existe este Usuario' });
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Se ha producido un error');
    }
    next();
}

exports.borrarUsuario = async (req, res, next) => {
    try {

        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'No existe este Usuario' });
        }
        usuario = await Usuario.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Usuario eliminado con éxito' });
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send('Se ha producido un error');
    }

}