import { Component } from '@angular/core';
import { Podcast, PodcastService } from '../services/podcast';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podcast-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './podcast-formulario.html',
  styleUrl: './podcast-formulario.css'
})
export class PodcastFormulario {
  nuevoPodcast: Podcast = {
      nombre: '',
      descripcion: '',
      fechaPublicacion: '',
      fechaExpiracion: '',
      portadaURL: '',
      generoURL: ''
    };

    constructor(private podcastService: PodcastService) {}

  agregarPodcast() {
    console.log(this.nuevoPodcast); // <-- revisa aquí
    this.podcastService.addPodcast(this.nuevoPodcast).subscribe(() => {
      alert('Podcast agregado con éxito');
      this.nuevoPodcast = {
        nombre: '',
        descripcion: '',
        fechaPublicacion: '',
        fechaExpiracion: '',
        portadaURL: '',
        generoURL: ''
      };
    });
  }
}
