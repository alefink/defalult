import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost} from './IPost';
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

}
