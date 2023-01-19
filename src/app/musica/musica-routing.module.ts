import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './pages/musica/musica.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from '../shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MusicaComponent },
      { path: 'perfiles', component: PerfilComponent },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicaRoutingModule { }
