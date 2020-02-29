import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = "https://jsonplaceholder.typicode.com/posts/2";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  
  getPost() {
    return this.http.get(URL);
  };
}
2