import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Podcast {
  id?: number;
  nombre: string;
  descripcion: string;
  fechaPublicacion: string;
  fechaExpiracion: string;
  portadaURL: string;
  generoURL: string;
}

@Injectable({
  providedIn: 'root'
})

export class PodcastService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(`${this.apiUrl}/getPodcasts`);
  }

  getPodcastById(id: number): Observable<Podcast> {
    return this.http.get<Podcast>(`${this.apiUrl}/getPodcastById/${id}`);
  }

  addPodcast(podcast: Podcast): Observable<Podcast> {
    return this.http.post<Podcast>(`${this.apiUrl}/addPodcast`, podcast);
  }
}
