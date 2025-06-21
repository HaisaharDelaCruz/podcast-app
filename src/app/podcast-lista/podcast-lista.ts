import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastService, Podcast  } from '../services/podcast';

@Component({
  selector: 'app-podcast-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podcast-lista.html',
  styleUrl: './podcast-lista.css'
})
export class PodcastLista implements OnInit{
  podcasts: Podcast[] = [];

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.podcastService.getPodcasts().subscribe((data: any[]) => {
      this.podcasts = data.map(p => ({
        nombre: p.nombre_Podcast,
        descripcion: p.descripcion,
        fechaPublicacion: p.fecha_Publicacion,
        fechaExpiracion: p.fecha_Expiracion,
        portadaURL: p.portadaURL,
        generoURL: p.generoURL
      }));
    });
  }
}
