export class Usuario{
    _id?:number;
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleanos: Date;
    colorFavorito: string;
    sexo: string;
    notas: string;


    constructor(nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: Date,
        colorFavorito: string,
        sexo: string,
        notas: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.notas = notas;
    }

}