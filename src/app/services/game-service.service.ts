import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game.model';
import { environment } from '../../environment/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class GameService {
  url: string;
  constructor(private http: HttpClient) {}

  public getGames(platform = null, genre = null) {
    this.url = environment.API_URL + '/games';
    if (platform) {
      const operator = this.url.split('?')[1] ? '&' : '?';
      this.url = `${this.url}${operator}platform=${platform}`;
    }

    if (genre) {
      const operator = this.url.split('?')[1] ? '&' : '?';
      this.url = `${this.url}${operator}category=${genre}`;
    }

    return this.http.get<Game[]>(this.url);
  }

  public getGame(id: string) {
    return this.http.get<Game>(`${environment.API_URL}/game?id=${id}`)
  }
}
