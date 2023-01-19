export interface MusicResponse {
  total_albumes: number;
  total_canciones: number;
  albumes: string[];
  canciones: Cancion[];
}

export interface Cancion {
  cancion_id: number;
  nombre_album: string;
  nombre_tema: string;
  preview_url: string;
  fecha_lanzamiento: string;
  precio: Precio;
}

export interface Precio {
  valor: string;
  moneda: string;
}

export interface Favorito {
  nombre_banda: string;
  cancion_id: number;
  usuario: string,
  ranking: number
}
