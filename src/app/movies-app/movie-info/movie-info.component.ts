import { Component } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { movieInfoType } from './movieInfoType';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent {
  favorite = faHeart;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}
  movieId: number;
  trailer: string = '';
  type: string = '';
  poster_path: string = '';
  title: string = '';

  movieInfo: movieInfoType;
  myVideo = 'https://www.youtube.com/watch?v=';
  videoId: string = '';
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.movieId = id;
    this.movieService.getMovieById(this.movieId).subscribe((res: any) => {
      this.movieInfo = res;
      // initializing the var
      this.poster_path = this.movieInfo.poster_path;
      this.title = this.movieInfo.title;
      console.log();

      this.getTrailer();
    });
  }
  getTrailer() {
    this.movieService.getMovieTrailer(this.movieId).subscribe((res: any) => {
      let i = 0;
      while (i < res.results.length) {
        if (res.results[i].type === 'Trailer') {
          this.trailer = res.results[i].key;
        }
        i++;
      }
      this.videoId = this.myVideo + this.trailer;
    });
  }

  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }
}
