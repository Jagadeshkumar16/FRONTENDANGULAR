import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-reg',
  templateUrl: './planet-reg.component.html',
  styleUrl: './planet-reg.component.scss'
})
export class PlanetRegComponent {
  userData={
    name:'',
    email:'',
    password:'',
  }
  // keyboard: Keyboard;
  value = "";
  message: any;

  constructor(private planetService:PlanetService){}
  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };
signUp(){
  const register={
    username:this.userData.name,

    email:this.userData.email,
    password:this.userData.password,
  }
  console.log(register,"reg");
  this.planetService.register(register).subscribe((response: any) => {
    console.log(response,"res");
    if (response['Status'] === 201) {
      this.message = 'Logged in successfully';
    }
  },
  (error: any) => {
    console.error(error); // Handle error response
  }
);
}
}
