import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { EntrarComponent } from './componentes/entrar/entrar.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
