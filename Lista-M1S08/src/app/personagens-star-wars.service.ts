import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagemClass } from '../app/personagem-class';
import { API_PATH } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {

  private url = "http://localhost:3000/personagens"


  constructor(private _httpClient: HttpClient) { }

  public getPersonagens(): Observable<PersonagemClass[]> {
    return this._httpClient.get<PersonagemClass[]>(`${API_PATH}`)
  }
}

