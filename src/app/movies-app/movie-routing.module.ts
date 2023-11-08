import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import MovieCardsComponent from './movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = [
  {
    path: 'movies',
    children: [
      { path: '', component: MovieCardsComponent },
      { path: 'movie/:id', component: MovieInfoComponent }
    ],
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class MovieRoutingModule {}
