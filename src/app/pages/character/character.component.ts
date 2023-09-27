import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [
  ]
})
export class CharacterComponent {
  character!: Character;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    // Obtener el ID del personaje desde los parámetros de ruta
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('id'); // Convierte el ID a número si es necesario

      // Llamar al servicio para obtener el personaje por su ID
      this.charactersService.getCharacterById(characterId).subscribe((character: Character) => {
        this.character = character;
      });
    });
  }

  goBack(){

    this.router.navigateByUrl('/home')

  }

}
