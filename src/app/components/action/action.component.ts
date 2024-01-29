import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/Movie.interface';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  listaDeMovies: Movie[] = [];

  ngOnInit(): void {
    this.listaDeMovies =  [
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      },
      {
        imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`
      }
    ]
  
  
  
  }
}
