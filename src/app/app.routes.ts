import { Routes } from '@angular/router';
import { PodcastLista } from './podcast-lista/podcast-lista';
import { PodcastFormulario } from './podcast-formulario/podcast-formulario';

export const routes: Routes = [
    { path: '', component: PodcastLista },
    { path: 'nuevo', component: PodcastFormulario }
];
