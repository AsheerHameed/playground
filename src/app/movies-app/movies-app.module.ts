import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieRoutingModule } from './movie-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MovieCardsComponent, MovieInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [MovieCardsComponent],
})
export class MoviesAppModule {}
