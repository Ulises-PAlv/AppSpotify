import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})

export class ArtistsComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  tracks: any = [];

  constructor( private _aRoute: ActivatedRoute, private spotify: SpotifyService ) {
    this._aRoute.params.subscribe( params => {
      this.loading = true;
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtist(id) {
    this.spotify.routeArtist(id).subscribe( data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id) {
    this.spotify.getTopTracks(id).subscribe( data => {
      this.tracks = data;
      console.log(this.tracks);
      
    });
  }

}
