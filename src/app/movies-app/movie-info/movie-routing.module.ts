import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import MovieCardsComponent from '../movie-cards/movie-cards.component';

const routes: Routes = [
  {
    path: 'movies',
    component:MovieCardsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class MovieRoutingModule {}
