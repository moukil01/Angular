import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css'],
})
export class UserProfilComponent implements OnInit {
  public classHidden:string = "";
  public hidden:boolean = false;

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'src/assets/images.jpeg',
  }
  // view = false;

  constructor() {}

  // masquerAge(){
  //   this.User.age = ""
  // }
 

  ngOnInit() {
  }
  public isHidden(){
    if (this.hidden){
      this.classHidden = "no-hidden";
      this.hidden = false;
    }else{
      this.classHidden = "is-hidden"
      this.hidden = true;
    }
  }

}
