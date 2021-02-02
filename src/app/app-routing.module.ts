import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaComponent } from './componentes/carga/carga.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  { path: 'catalogo', component: FotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
