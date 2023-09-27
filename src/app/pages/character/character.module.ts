import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([  // Utiliza 'forChild' para configurar rutas en módulos de características.
      { path: '', component: CharacterComponent },  // Ruta para el componente HomeComponent.
    ]),
  ],
})
export class CharacterModule { }
