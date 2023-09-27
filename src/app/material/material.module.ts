import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TableModule,
    CardModule,
    ButtonModule,
    ImageModule
  ]
})
export class MaterialModule { }
