import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MusicResponse, Cancion, Favorito } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listar(nombre: string): Observable<Cancion[]> {
    const params = new HttpParams().set('term', nombre);
    const url = `${this.baseUrl}/search_tracks`;
    return this.http.get<MusicResponse>(url, { params })
      .pipe(map(resp => resp.canciones));
  }

  favoritos(usuario: string): Observable<Favorito[]> {
    const url = `${this.baseUrl}/favoritos/${usuario}`;
    return this.http.get<Favorito[]>(url);
  }

  addFavorito(favorito: Favorito): Observable<Favorito> {
    const url = `${this.baseUrl}/favoritos`;
    return this.http.post<Favorito>(url, favorito);
  }

  removeFav(usuario: string, cancion_id: number): Observable<Favorito> {
    const url = `${this.baseUrl}/favoritos/${usuario}/cancion/${cancion_id}`;
    return this.http.delete<Favorito>(url);
  }
}
