import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfilComponent } from './user-profil/user-profil.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    
    UserProfilComponent
  ],
  imports: [
    BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
