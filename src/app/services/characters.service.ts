import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/'; // Reemplaza con la URL real de tu API.

  constructor(private http: HttpClient) {}

  // Método para buscar personajes por nombre y género.
  searchCharacters(query: string): Observable<Character[]> {
    const queryParams = `${query}`;
    const url = `${this.apiUrl}${queryParams}`;

    return this.http.get<Character[]>(url);
  }

  getCharacterById(id: string | null): Observable<Character> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  // Agrega otros métodos según sea necesario
}
