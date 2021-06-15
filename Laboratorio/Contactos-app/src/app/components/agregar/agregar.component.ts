import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgendaService } from '../../services/agenda.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  UserForm: FormGroup;

  /* Títulos */

  Cabecera = 'Formulario de Registro';
  id: string | null;

  /* Opciones del formulario*/
  colors: string[] = [
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
    'Amarillo'
  ];
  opciones_sexo: string[] = ['Hombre',
    'Mujer',
    'Otro',
    'No Especificado'
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _usuarioService: AgendaService,
    private aRouter: ActivatedRoute) {
    this.UserForm = this.fb.group(
      {
        nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.noNumbers]),
        apellidos: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.noNumbers]),
        edad: new FormControl('', [Validators.required, this.edadValid]),
        dni: new FormControl('', [Validators.required, this.dniValid]),
        cumpleanos: new FormControl(new Date, [Validators.required, this.rangeDate]),
        colorFavorito: new FormControl('', [Validators.required]),
        sexo: new FormControl('', [Validators.required]),
        notas: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]),
      })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.editarUsuario();
  }


  /* Mis validaciones */
  rangeDate(FormControl:any):any {
    const datemin:Date = new Date("1895-06-02");
    const datemax:Date = new Date(Date.now());
    const datePick:Date = new Date(FormControl.value);
    if (datemin <= datePick && datemax >= datePick) {
      return null
    } else
      return { rangeDate: 'Fecha fuera de rango.\nNo puede tener una edad futura ni más de 125 años'}
  }

  noNumbers(FormControl: any): any {
    const value: any = FormControl.value;
    const Regex: RegExp = /[a-zA-Z]$/;

    if (Regex.test(value)) {
      return null
    } else
      return { nonumbers: 'No se pueden introducir números en este campo' }
  }

  edadValid(FormControl: any): any {
    const value: any = FormControl.value;
    const min: number = 0;
    const max: number = 125;

    if (value >= min && value <= max) {
      return null;
    }
    return { edadvalid: { min, max } };
  }

  dniValid(FormControl: any): any {
    const value: any = FormControl.value;
    const Regex: RegExp = /^\d{8}[a-zA-Z]$/;

    if (Regex.test(value)) {
      const num: number = value.substr(0, value.length - 1);
      const letra: string = value.charAt(value.length - 1);
      const letter_Answer: string = 'TRWAGMYFPDXBNJZSQVHLCKET';
      const dni_ok: number = num % 23;
      const let_seleccionada: string = letter_Answer.charAt(dni_ok);

      if (letra.toUpperCase() == let_seleccionada) {
        return null
      }
      return { dnivalid: 'Letra de DNI incorrecta para esta numeración' }
    }
    return { dnivalid: 'DNI no válido. Ejemplo DNI -> 01234567L' }
  }

  /* Funciones de control */
  agregarUsuario() {
    console.log(this.UserForm);
    console.log(this.UserForm.get('nombre')?.value);
    const Usuario: Usuario = {
      nombre: this.UserForm.get('nombre')?.value,
      apellidos: this.UserForm.get('apellidos')?.value,
      edad: this.UserForm.get('edad')?.value,
      dni: this.UserForm.get('dni')?.value,
      cumpleanos: this.UserForm.get('cumpleanos')?.value,
      colorFavorito: this.UserForm.get('colorFavorito')?.value,
      sexo: this.UserForm.get('sexo')?.value,
      notas: this.UserForm.get('notas')?.value,
    }


    console.log("USER", Usuario);


    if (this.id !== null) {
      //editar usuario
      this._usuarioService.editarUsuario(this.id, Usuario).subscribe(data =>{
        this.toastr.info(`${Usuario.nombre} ${Usuario.apellidos}`, '¡Usuario Actulizado!');
        this.router.navigate(['/']);
      }, error => {
        this.toastr.error(error, 'ERROR');
        this.UserForm.reset();
      })
    } else {
      //Agregamos usuario
      this._usuarioService.agregarUsuario(Usuario).subscribe(data => {
        this.toastr.success(`${Usuario.nombre} ${Usuario.apellidos}`, '¡Usuario Registrado!');
        this.router.navigate(['/']);
        this.UserForm.reset();
      }, error => {
        this.toastr.error(error, 'ERROR');
        this.UserForm.reset();
      })
    }
  }
  editarUsuario() {
    if (this.id !== null) {
      this.Cabecera = 'Editar Usuaraio';
      this._usuarioService.obtenerEditarUsuario(this.id).subscribe(data => {
        console.log(data);
        this.UserForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          edad: data.edad,
          dni: data.dni,
          cumpleanos: data.cumpleanos,
          colorFavorito: data.colorFavorito,
          sexo: data.sexo,
          notas: data.notas
        });
      }, error => {
        console.log(error);
      })
    }
  }
}
