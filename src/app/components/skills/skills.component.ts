import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public posts = [];  

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.apiservice.getArticules()
      .subscribe(data => this.posts = data)
  }

}
