import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaRoutingModule } from './musica-routing.module';
import { MusicaComponent } from './pages/musica/musica.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MusicaComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MusicaRoutingModule,
    FormsModule
  ]
})
export class MusicaModule { }
