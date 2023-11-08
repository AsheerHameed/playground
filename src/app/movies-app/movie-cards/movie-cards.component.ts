import { Component } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { moviesType } from './movie_interface/moviesType';
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
  movieInfo: moviesType[] = [];
  constructor(private movie: MovieServiceService) {
    this.movie.getMovies().subscribe((res: any) => {
      this.movieInfo = res.results;
    });
    // this.movie.getHighestRatedMovies().subscribe((res)=>{
    //   console.log(res);
    // })
  }
}
export default MovieCardsComponent;
