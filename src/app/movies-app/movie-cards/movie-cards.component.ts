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


  movieData = [
    {
      imageUrl: 'https://example.com/movie1.jpg',
      location: 'United States',
      year: 2022,
      title: 'Movie 1',
      rating: 4.5,
      genre: 'Action',
    },
    {
      imageUrl: 'https://example.com/movie2.jpg',
      location: 'Canada',
      year: 2021,
      title: 'Movie 2',
      rating: 4.2,
      genre: 'Drama',
    },
    {
      imageUrl: 'https://example.com/movie3.jpg',
      location: 'United Kingdom',
      year: 2020,
      title: 'Movie 3',
      rating: 4.0,
      genre: 'Comedy',
    },
    // Add more movie objects as needed
  ];
}
export default MovieCardsComponent;
