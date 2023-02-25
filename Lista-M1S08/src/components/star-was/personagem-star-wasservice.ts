import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/enviroments/enviroments';
import { } from '../enviroments/enviroments';
import { PersonagemClass } from './personagem-class';

Injectable(
  {
    providedIn: 'root'
  }
)
export class PersonagensStarWasService {
  private url = "http://localhost:3000/personagens";

  constructor(private _httpClient: HttpClient) { }
  public getPersonagens() {
    return this._httpClient.get()<PersonagemClass[]>(`${API_PATH}`)



  }
}