import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Error404Component } from './error404/error404.component';

// Importe para hacer HTTP REQUEST
import { HttpClientModule } from '@angular/common/http';

// Para hacer funcionar nuestras rutas...
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NoImagePipe } from './pipes/no-image.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SecureDOMPipe } from './pipes/secure-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    NoImagePipe,
    CardComponent,
    LoadingComponent,
    SecureDOMPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
