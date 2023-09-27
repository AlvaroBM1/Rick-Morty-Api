import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([  // Utiliza 'forChild' para configurar rutas en módulos de características.
      { path: '', component: HomeComponent },  // Ruta para el componente HomeComponent.
    ]),
    FormsModule,
    HttpClientModule,
  ],
})
export class HomeModule { }
