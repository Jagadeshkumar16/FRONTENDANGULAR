import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';
import { response } from '../../../node_modules copy/@types/express';

@Component({
  selector: 'app-reproduction',
  templateUrl: './reproduction.component.html',
  styleUrl: './reproduction.component.scss'
})
export class ReproductionComponent {
  organisms: any[] = [];
  selectedWeatherType: string = '';
  message: any;
  isLoading:boolean=false;
  // getOptions(organismType: string): string[] {
  //   switch (organismType) {
  //     case 'Land':
  //       return this.landOptions;
  //     case 'Aquatic':
  //       return this.aquaticOptions;
  //     case 'Herbivorous':
  //       return this.herbivorousOptions;
  //     case 'Carnivorous':
  //       return this.carnivorousOptions;
  //     case 'Omnivorous':
  //       return this.omnivorousOptions;
  //     default:
  //       return [];
  //   }
  // }
  constructor(private planetService:PlanetService){}
  ngOnInit(){
    this.getAllorganism();
  }
  reproductionOrganism(){
    // this.isLoading=true;
    const reproduce={
      species:this.selectedWeatherType
    }
    console.log(reproduce,'orgo');
    this.planetService.reproduction(reproduce).subscribe(
      (response: any) => {
        console.log(response,'login success');
        
        const species = response.species;
        alert(`${species} reproductioncompleted`);
        this.getAllorganism();
        if (response && response['message'] === 'success') {
          this.message = 'Logged in successfully';
          // this.isLoading=false;
          // this.routes.navigate(['/planethome']);
        }
      },
      (error: any) => {
        console.error(error); // Handle error response
      }
    );
  }
  getAllorganism(){
    this.planetService.getorganisms().subscribe(
      (response:any)=>{
        console.log(response,"all");
        this.organisms = response;
        const giraffeCount = this.organisms.filter(organism => organism.species === 'Giraffee').length;
        console.log(giraffeCount,"count");
      })
  }
  deleteOrganism(id: string): void {
    this.planetService.deleteOrganism(id).subscribe(
      (response: any) => {
        console.log(response, "dlt");
        alert('Deleted successfully');
        this.getAllorganism();
      },
      (error: any) => {
        console.error('Error deleting organism:', error);
        alert('Error deleting organism');
      }
    );
  }
}
