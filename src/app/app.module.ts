import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.Routes';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    
    UserProfilComponent,
    
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
