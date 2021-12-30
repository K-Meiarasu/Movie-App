import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie:any
  
  link:any=''

  cc:any=[]

  about:any
  constructor(private cinema:CinemaService) { }

  ngOnInit(): void {
      this.cinema.getMovieId().subscribe( movie => {
        this.movie=movie;
      console.log(this.movie.results[0].key);
      this.link='https://www.youtube.com/embed/'+this.movie.results[0].key;
    })
    this.cinema.getDetails().subscribe( details => {
      this.about=details;
    for(let i=0;i<13;i++)
      {
        this.cc.push(this.about.credits.cast[i])
      }
    })
  }
}
