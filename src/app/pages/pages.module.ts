import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConocemeComponent } from './conoceme/conoceme.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    ConocemeComponent,
    GaleriaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
