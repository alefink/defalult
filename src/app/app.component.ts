import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador = 1;
  nombre='';
  apellido='';
  title = 'default-Ale';
  edad = 40;
  email = 'alejandro.finkelberg@gmail.com';
  sueldos = [1700, 1600, 1900];
  
}
