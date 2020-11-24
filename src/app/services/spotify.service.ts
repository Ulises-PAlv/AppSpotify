import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// RxJS
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('SpotifyService Loaded...');
  }

    // Aqui se declaran los headers para nuestras peticiones.
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQD8CMf6Eh-gYsrV2GKKETU2IUVKPDJr1vRgUEUacUCUyogIHhv_m6WkXvwsUdcaqtpUyTu3NWBQDljAc3k'
    });

    return this.http.get(url, {headers});
  }

  // Es mejor filtrar la data en el servicio a mandarla y el componente se encargue en filtrar... por eso filtramos con map
  getNewRealeses() {
    return this.getQuery('browse/new-releases').pipe(map( data => {
      return data['albums'].items;
    }));
  }

  getArtist(str) {
    return this.getQuery(`search?q=${str}&type=artist`).pipe(map( (data: any) => {
      return data.artists.items;
    }));
  }

  routeArtist(id) {
    return this.getQuery(`artists/${id}`).pipe(map(data => {
      return data;
    }));
  }

  getTopTracks(id) {
    return this.getQuery(`artists/${id}/top-tracks?market=MX`).pipe(map( data => data['tracks']));
  }

}
