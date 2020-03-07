import { Component, OnInit } from '@angular/core';

/**
 * @title Basic cards
 */
export interface Contract {
  id: string;
  name: string;
  body: string;
  precio: number
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  contracts: Array<Contract> = [
    { 
      id: '1',
      name: 'carlos',
      body: 'garpar las deudas!!!!!',
      precio: 0
    },
    { 
      id: '2',
      name: 'juan',
      body: 'sarasa-----------',
      precio: 0
    },
    { 
      id: '2',
      name: 'jose',
      body: 'otro texto de prueba',
      precio: 3500
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
