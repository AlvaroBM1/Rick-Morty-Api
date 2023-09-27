import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, of, switchMap } from 'rxjs';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  name: string = '';
  characters: Character[] = [];
  selectedGender: string = '';

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.search(this.name, this.selectedGender);
  }

  // // Método para manejar la búsqueda cuando se envía el formulario.
  // searchName(): void {
  //   this.charactersService
  //     .searchCharacters('?name=' + this.name)
  //     .pipe(
  //       debounceTime(300),
  //       catchError((error) => {
  //         console.error(error); // Log del error en la consola.
  //         this.characters = []; // Borra la lista en caso de error 404.
  //         return of([]); // Devuelve un observable vacío para evitar propagar el error.
  //       })
  //     )
  //     .subscribe((response: any) => {
  //       // Verificamos si 'results' existe en la respuesta y si es un array.
  //       if (response && response.results && Array.isArray(response.results)) {
  //         this.characters = response.results;
  //       } else {
  //         // Si la estructura de la respuesta es incorrecta o no contiene 'results', asignamos un array vacío.
  //         this.characters = [];
  //       }
  //     });
  // }

  // searchByGenre(): void {
  //   this.charactersService
  //     .searchCharacters('?gender=' + this.selectedGender)
  //     .pipe(
  //       debounceTime(300),
  //       catchError((error) => {
  //         console.error(error); // Log del error en la consola.
  //         this.characters = []; // Borra la lista en caso de error 404.
  //         return of([]); // Devuelve un observable vacío para evitar propagar el error.
  //       })
  //     )
  //     .subscribe((response: any) => {
  //       // Verificamos si 'results' existe en la respuesta y si es un array.
  //       if (response && response.results && Array.isArray(response.results)) {
  //         this.characters = response.results;
  //       } else {
  //         // Si la estructura de la respuesta es incorrecta o no contiene 'results', asignamos un array vacío.
  //         this.characters = [];
  //       }
  //     });
  // }

  search(name: string, gender: string): void {
    // Verifica si 'name' y 'gender' están presentes.
    if (name && gender) {
      // Si ambos están presentes, construye la URL de consulta con ambos parámetros.
      const queryParams = `?name=${name}&gender=${gender}`;
      this.performSearch(queryParams);
    } else if (name) {
      // Si solo 'name' está presente, construye la URL de consulta con el parámetro 'name'.
      const queryParams = `?name=${name}`;
      this.performSearch(queryParams);
    } else if (gender) {
      // Si solo 'gender' está presente, construye la URL de consulta con el parámetro 'gender'.
      const queryParams = `?gender=${gender}`;
      this.performSearch(queryParams);
    } else {
      // Si ambos están vacíos, realiza una búsqueda sin parámetros.
      this.performSearch('');
    }
  }

  private performSearch(queryParams: string): void {
    this.charactersService
      .searchCharacters(queryParams)
      .pipe(
        debounceTime(300)
      )
      .subscribe((response: any) => {
        if (response && response.results && Array.isArray(response.results)) {
          this.characters = response.results;
        } else {
          this.characters = [];
        }
      },
      (error: any) => {
        if (error.status === 404) {
          // Aquí puedes manejar la situación en la que no se encontraron resultados.
          this.characters = [];
          console.error('No se encontraron personajes con ese nombre.');
        } else {
          // Manejar otros errores de la solicitud HTTP si es necesario.
          console.error('Error en la solicitud HTTP:', error);
        }
      }
    );
  }
}
