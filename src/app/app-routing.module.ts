import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';

const routes: Routes = [
  {
    path:"Inicio",
    component:InicioComponent
  },
  {
    path:"Ubicanos",
    component:UbicanosComponent
  },
  {
    path:"Contactanos",
    component:ContactanosComponent
  },
  {
    path:"", redirectTo: '/Inicio' , pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
