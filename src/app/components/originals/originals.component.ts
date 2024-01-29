import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/Movie.interface';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.css']
})
export class OriginalsComponent implements OnInit {

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
