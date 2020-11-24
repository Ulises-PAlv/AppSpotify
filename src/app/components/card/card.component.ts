import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() Items: any[]= [];

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  verArtista(item) {
    let artistaID;

    if(item.type === 'album') {
      artistaID = item.artists[0].id;
    } else {
      artistaID = item.id;
    }

    // console.log(artistaID);
    this._router.navigate(['/artists', artistaID]);
  }

}
