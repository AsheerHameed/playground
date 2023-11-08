import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './users/user-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesAppModule } from './movies-app/movies-app.module';
import { RouterModule } from '@angular/router';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PocModule } from './poc/poc.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    CartModule,
    AdminModule,
    BrowserAnimationsModule,
    UsersModule,
    HttpClientModule,
    MoviesAppModule,
    RouterModule,
    PocModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
