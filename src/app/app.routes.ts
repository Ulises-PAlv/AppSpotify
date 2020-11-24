import { Routes } from '@angular/router';

// Componentes
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { Error404Component } from './error404/error404.component';

// Exportamos una constante que sera nuestro arreglo de rutas (path's).
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artists/:id', component: ArtistsComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', component: Error404Component }
];
