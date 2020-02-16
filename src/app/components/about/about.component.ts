import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  post;
  
  constructor(private apiService: ApiService) { }
  
  ngOnInit() 
  {
    this.apiService.getPost().subscribe((data) =>{
      console.log(data);
      this.post = data;
    })
  };

}
