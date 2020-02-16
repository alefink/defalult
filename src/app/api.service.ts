import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

const URL = "https://jsonplaceholder.typicode.com/posts/1";
export class ApiService {
  //private post: any;
  constructor(private http: HttpClient) { }
  
  getPost() {
    return  this.http.get(URL);
  };
}
2