import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  public posts = [];
  constructor(
    private apiService: ApiService
    ) { }
  
  ngOnInit() 
  {
    //this.posts = this.apiService.getPosts();
    //console.log(this.posts);
    this.apiService.getPosts()
        .subscribe(data => this.posts = data)
  };

}
