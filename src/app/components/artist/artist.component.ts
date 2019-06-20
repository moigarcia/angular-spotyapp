import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {
  artist:any = {};
  topTracks:any[] = [];

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService
    ) { 
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks( params['id'])
    })
  }
  
  getArtist(id:string){ 
    this.spotify.getArtist(id)
        .subscribe( response => {
          console.log(response)
          this.artist = response;
        })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
        .subscribe( response => {
          console.log(response)
          this.topTracks = response
        })
  }

}
