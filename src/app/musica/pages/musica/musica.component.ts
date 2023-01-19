import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../../services/musica.service';
import { Cancion, Favorito } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  termino: string = '';
  lastTermino: string = '';
  canciones: Cancion[] = [];
  favoritos: Favorito[] = [];
  usuario = '';

  constructor(
    private musicaServcie: MusicaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('myNombreUsuario')) {
      this.router.navigate(['/musica/perfiles']);
    }
    this.usuario = localStorage.getItem('myNombreUsuario')!;
    this.actualizarFavoritos();
  }

  buscar() {
    if (!this.termino) {
      return;
    }
    this.musicaServcie.listar(this.termino).subscribe(resp => this.canciones = resp);
    this.lastTermino = this.termino;
  }

  agergarFav(cancion: Cancion) {
    const favorito = {
      nombre_banda: this.lastTermino,
      cancion_id: cancion.cancion_id,
      usuario: this.usuario,
      ranking: 5
    }
    this.musicaServcie.addFavorito(favorito).subscribe((_) => this.actualizarFavoritos());
  }

  actualizarFavoritos() {
    this.musicaServcie.favoritos(this.usuario).subscribe(resp => this.favoritos = resp);
  }
}
