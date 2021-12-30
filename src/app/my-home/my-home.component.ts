import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movie:any=[]
  id:any
  array:any=[]

  languages:any=''
  constructor(private cinema:CinemaService) { 
    this.cinema.getMovies().subscribe(movie => {
      this.movie.movie
      for(let i=0;i<this.movie.results.length;i++)
      {
        this.array.push(this.movie.results[i]);
      }
    })
  }
  select(id:any){
    this.id=id
    this.cinema.getId(id);
  }
  lang(){
    this.array=[]
    if(this.languages=="English"){
      this.cinema.selectLanguage(this.languages).subscribe(movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.array.push(this.movie.results[i]);
          console.log(this.array[i])
        }
        });
    }
    else if(this.languages=="Hindi"){
      this.cinema.selectLanguage(this.languages).subscribe(movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.array.push(this.movie.results[i]);
          console.log(this.array[i])
        }
        });
    }
    else if(this.languages=="Tamil"){
      this.cinema.selectLanguage(this.languages).subscribe(movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.array.push(this.movie.results[i]);
          console.log(this.array[i])
        }
        });
    }
    else if(this.languages=="Telugu"){
      this.cinema.selectLanguage(this.languages).subscribe(movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.array.push(this.movie.results[i]);
          console.log(this.array[i])
        }
        });
    }
  }
  ngOnInit(): void {
  }
}