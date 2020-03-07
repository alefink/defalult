import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost} from './models/IPost';
// rxjs
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  
  getPosts(): Observable<IPost[]> {
    return <any>this.http.get(this.URL);
  };

  getArticules(): Observable<IPost[]> {
    return <any>this.http.get("http://localhost:3000/articulos");
  }
}
