import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos propios
import { SharedModule } from './shared/shared.module';
import { GalleryModule } from './gallery/gallery.module';
import { ContactModule } from './contact/contact.module';
import { KnowMeModule } from './know-me/know-me.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GalleryModule,
    ContactModule,
    KnowMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
