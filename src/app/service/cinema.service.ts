import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  second="=ta-IN&page=1";

  movie="https://api.themoviedb.org/3/movie/";

  api="/videos?api_key=a027d0067c70e122c007149010d7bfc1&language";

  api_key="?api_key=a027d0067c70e122c007149010d7bfc1&"

  id:number=0;

  value=false

  constructor(private http:HttpClient) { }

  getMovies(){
    const first="https://api.themoviedb.org/3/movie/now_playing?api_key=a027d0067c70e122c007149010d7bfc1&language";
    const url="https://api.themoviedb.org/3/movie/now_playing?api_key=a027d0067c70e122c007149010d7bfc1&language=en-US&page=1";
    return this.http.get(first+this.second);
  }

  selectLanguage(lang:any){
    if(lang==="English")
    {
      this.second="=en-US&page=1"
    }
    if(lang==="Hindi")
    {
      this.second="=hi-IN&page=1";
    }
    if(lang==="Tamil")
    {
      this.second="=ta-IN&page=1"
    }
    if(lang==="Telugu")
    {
      this.second="=te-IN&page=1"
    }
    return this.getMovies();
  }

  getId(id:any){
    this.id=id;
  }

  getMovieId(){
    return this.http.get(this.movie+this.id+this.api+this.second);
  }

  getDetails(){
    return this.http.get(this.movie+this.id+this.api_key+'append_to_response=credits');
  }

  auth(value:any)
  {
    this.value=value;
  }
  
  getusers()
  {
    return this.http.get('http://localhost:3000/User');
  }

  login()
  {
    if(this.value)
    {
      return true;
    }
    return false;
  }
}