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
  isStarreds: boolean[] = [];

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
    this.musicaServcie.listar(this.termino).subscribe(resp => {
      this.canciones = resp;
      this.actualizarEstrellas();
    });
    this.lastTermino = this.termino;
  }

  agergarFav(cancion: Cancion) {
    const starredIds = this.favoritos.map(fav => fav.cancion_id);
    if (starredIds.includes(cancion.cancion_id)) {
      this.musicaServcie.removeFav(this.usuario, cancion.cancion_id)
        .subscribe((_) => this.actualizarFavoritos());
    } else {
      const favorito = {
        nombre_banda: this.lastTermino,
        cancion_id: cancion.cancion_id,
        usuario: this.usuario,
        ranking: 5
      }
      this.musicaServcie.addFavorito(favorito)
        .subscribe((_) => this.actualizarFavoritos());
    }
  }

  actualizarFavoritos() {
    this.musicaServcie.favoritos(this.usuario).subscribe(resp => {
      this.favoritos = resp;
      this.actualizarEstrellas();
    });
  }

  actualizarEstrellas() {
    const estrellasArr = new Array(this.canciones.length).fill(false);
    const starredIds = this.favoritos.map(fav => fav.cancion_id);
    this.canciones.forEach((cancion, index) => {
      if (starredIds.includes(cancion.cancion_id)) {
        estrellasArr[index] = true;
      }
    });
    this.isStarreds = estrellasArr;
  }
}
