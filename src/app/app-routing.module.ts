import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'musica',
    loadChildren: () => import('./musica/musica.module').then(m => m.MusicaModule),
  },
  {
    path: '**',
    redirectTo: 'musica'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
