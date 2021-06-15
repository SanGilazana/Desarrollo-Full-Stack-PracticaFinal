import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar/:id', component: AgregarComponent },
  { path: '**', redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
