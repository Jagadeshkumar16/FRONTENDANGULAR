import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Router } from '@angular/router';

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
  constructor(private planetService:PlanetService,private routes:Router){}
  login(userData: any) {
    const data = {
      username: userData.email,
      password: userData.password,
    };

    console.log(data);

    this.planetService.login(data).subscribe(
      (response: any) => {
        console.log(response,'login success');

        if (response && response['message'] === 'success') {
          this.message = 'Logged in successfully';
          this.routes.navigate(['/planethome']);
        }
      },
      (error: any) => {
        console.error(error); // Handle error response
      }
    );
  }

}
