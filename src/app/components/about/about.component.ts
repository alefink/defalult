import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    this.getapi();
  }

  result: any = []
  
  constructor(private apService: ApiService) { }
  getapi() {
    console.log("Por entrar")
    this.apService.getResutFromRestApi()
    //console.log(JSON.parse(res));  
    
  }

}
