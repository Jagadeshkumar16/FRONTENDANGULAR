import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-login',
  templateUrl: './planet-login.component.html',
  styleUrl: './planet-login.component.scss'
})
export class PlanetLoginComponent {
  userData = {
    email: '',
    password: ''
  };
  message: any;
  constructor(private planetService:PlanetService){}
  login(userData: any) {
    const data = {
      username: userData.email,
      password: userData.password,
    };

    console.log(data);

    this.planetService.login(data).subscribe(
      (response: any) => {
        console.log(response,'login success');

        if (response['Status'] === 200) {
          this.message = 'Logged in successfully';
        }
      },
      (error: any) => {
        console.error(error); // Handle error response
      }
    );
  }

}
