import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-home',
  templateUrl: './planet-home.component.html',
  styleUrl: './planet-home.component.scss'
})
export class PlanetHomeComponent {
  landOptions: string[] = ['Animals', 'Plants', 'Fungi'];
  aquaticOptions: string[] = ['Fish', 'Amphibians', 'Mollusks'];
  herbivorousOptions: string[] = ['Option X', 'Option Y', 'Option Z'];
  carnivorousOptions: string[] = ['Option P', 'Option Q', 'Option R'];
  omnivorousOptions: string[] = ['Option M', 'Option N', 'Option O'];
  selectedOrganismType: string = '';
  displayName='home';
  constructor(private routes:Router){

  }

  getOptions(organismType: string): string[] {
    switch (organismType) {
      case 'Land':
        return this.landOptions;
      case 'Aquatic':
        return this.aquaticOptions;
      case 'Herbivorous':
        return this.herbivorousOptions;
      case 'Carnivorous':
        return this.carnivorousOptions;
      case 'Omnivorous':
        return this.omnivorousOptions;
      default:
        return [];
    }
  }
  feed(){
    this.displayName='food';
  }
  simulate(){
    this.displayName='simulate';
  }
  reproduction(){
    this.displayName='reproduce';
  }
  enviornment(){
    this.displayName='env';
  }
  population(){
    this.displayName='Population';
  }
  logout(){
    this.routes.navigate(["/login"])
  }
  planetHome(){
    this.displayName='home';
  }
  genetics(){
    this.displayName='genetic';
  }
  historyPlanet(){
    this.displayName='history';
  }
  humanevolution(){
    this.displayName='humanevolve';
  }
  organismevolution(){
    this.displayName='organismevolve';
  }
  life(){
    this.displayName='lifeCycle';
  }
  climate(){
    this.displayName='weather';
  }
}
