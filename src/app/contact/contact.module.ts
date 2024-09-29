import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
