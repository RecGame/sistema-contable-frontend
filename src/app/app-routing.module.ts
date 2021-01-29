import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrarComponent } from '../app/componentes/entrar/entrar.component';
import { PrincipalComponent } from '../app/componentes/principal/principal.component';
const routes: Routes = [
  { path: 'entrar', component: EntrarComponent},
  {path: 'principal', component: PrincipalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
