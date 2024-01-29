import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interface/Movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    //input para recibir output para enviar
  @Input({required: true}) movie!: Movie
}
