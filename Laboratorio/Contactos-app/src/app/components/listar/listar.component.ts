import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { Usuario } from '../../models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(private _usuarioService: AgendaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listaUsuarios = data;
    }, error => {
      console.log(error);
    })
  }

  borrarUsuario(id: any) {

    this._usuarioService.borrarUsuario(id).subscribe(data => {
      this.toastr.error('Registro borrado con éxito', 'USUARIO BORRADO');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);

    })
  }

}
