import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriasComponent } from './components/galerias/galerias.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    GaleriasComponent,
    ConocemeComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeccionesModule { }
