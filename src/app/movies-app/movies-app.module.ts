import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MovieCardsComponent} from './movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieRoutingModule } from './movie-info/movie-routing.module';

@NgModule({
  declarations: [MovieCardsComponent, MovieInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
  ],
  exports : [MovieCardsComponent]
})
export class MoviesAppModule { }
