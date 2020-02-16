import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private post: any;
  constructor(private http: HttpClient) { }
  
  getResutFromRestApi() {
    let response =  this.http.get("https://jsonplaceholder.typicode.com/todos/1")
    response.subscribe((data) =>{
      this.post = JSON.parse(JSON.stringify(data));
      console.log(this.post.userId);
      console.log(this.post.title);
    });
  }
   
}
2