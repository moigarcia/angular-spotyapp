import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  newSongs:any[]=[];
  error:boolean;
  messageError:string;
  loading: boolean;

  constructor( private spotify: SpotifyService ) { 
   
   this.loading = true;
   this.error = false;

   this.spotify.getNewReleases()
     .subscribe( (data:any) => {
        this.newSongs = data;
        this.loading = false;
     }, (error)=> {
       this.error = true;
       this.messageError = error.error.error.message; 
     })
  }


}
