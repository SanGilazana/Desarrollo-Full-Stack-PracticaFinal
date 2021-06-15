import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";

//Componentes Formulario
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';

//Componenetes Material
import { ConfigMaterial } from './Utilities/config-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Librería para mensajes */
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigMaterial,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
