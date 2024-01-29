import { Component, OnInit } from '@angular/core';
import { Genre } from './interface/Genre.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NETFLIX-APP';

  listaDeGeneros: Genre[] = [];

  ngOnInit(): void {
    
  
  
  
  }
}
