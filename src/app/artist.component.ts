import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from './artist';
import { Album } from './album';

// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'

})
export class ArtistComponent implements OnInit {
  constructor(private _sharedService: SharedService,
              private _route: ActivatedRoute) {
  }
  id:string;
  artist: Artist[];
  album: Album[];

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id)=> {
        this._sharedService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })
      })

  }


}
