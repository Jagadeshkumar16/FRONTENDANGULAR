import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlanetService } from '../planet.service';
// export interface Organism {
//   name: string;
//   generation: number;
// }
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrl: './generation.component.scss'
})

export class GenerationComponent {
  displayedColumns: string[] = ['Name', 'Count'];
  speciesData: { species: string; count: number; }[] = [];
  organisms: any[] = [];
  organismCount: number = 0;
  // displayName='graph';
  chart: any; 
  // Chart properties
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    { data: [], label: 'Organism Count' }
  ];

  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.getAllorganism();
    // const chartData = this.speciesData.map(d => ({ name: d.species, y: d.count }));
    
  
  }

  getAllorganism() {
    this.planetService.getorganisms().subscribe(
      (response: any) => {
        this.organisms = response;
        this.organismCount = this.organisms.length;
        this.calculateSpeciesCount();
      }
    );
  }

  calculateSpeciesCount(): void {
    const speciesMap = new Map<string, number>();

    this.organisms.forEach(organism => {
      const species = organism.species;
      speciesMap.set(species, (speciesMap.get(species) || 0) + 1);
    });

    this.speciesData = Array.from(speciesMap).map(([species, count]) => ({ species, count }));
    this.createChart(); 
  }

  createChart() {
    if (this.speciesData.length > 0) {
      const chartData = this.speciesData.map(d => ({ name: d.species, y: d.count }));
      this.chart = Highcharts.chart('container', { 
        chart: {
          type: 'column'
        },
      
        series: [{
          name: 'Species Count',
          type: 'column',
          data: chartData
        }]
      });
    } else {
      console.warn('No data available for chart');
    }
  }

}
