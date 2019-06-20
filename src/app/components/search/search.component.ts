import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists:any[]=[];
  loading: boolean;
  
  constructor( private spotify: SpotifyService) { 

  }
    
   search(data:string){
     this.loading = true;

     if(data.length > 0){
       this.spotify.getArtists(data)
         .subscribe((response:any) => {
            this.artists = response;
            this.loading = false;
         })
      } else if (data.length == 0){
        this.loading = false;
      }
   }

}
