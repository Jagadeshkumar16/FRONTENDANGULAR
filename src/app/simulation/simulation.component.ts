import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';
import * as Highcharts from 'highcharts';
import { MapType } from '@angular/compiler';
// interface SpeciesData {
//   species: string;
//   count: number;
//   year: string; // Add the 'year' property
// }

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.scss'
})
export class SimulationComponent {
  displayedColumns: string[] = ['Name', 'Count'];
  //speciesData: { species: string; count: number; year: string; hunted: number; reproduced: number; }[] = [];
  speciesData: { species: string; count: number; year: string; }[] = [];
  organisms: any[] = [];
  organismCount: number = 0;
  simIntervalId:any;
  repIntervalId:any;
  giraffeeCount:any;
  humanCount:any;
  lionCount:any;
  egaleCount:any;
  pigeonCount:any;
  cellCount:any;
  displayName='simulation';
  chart: Highcharts.Chart | null = null;
  chartline: Highcharts.Chart | null = null;
  reproduce: any;
  hunted: any;
  reproducedCnt=0;
  huntedCnt=0;
  species = ['Human', 'Lion', 'Giraffee', 'Eagle', 'Pigeon', 'Cell'];

  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.getAllorganism();
    this.reproduce = new Map();
    this.hunted = new Map();
    this.species.forEach(r => {
      this.reproduce.set(r, 0);
      this.hunted.set(r, 0);
    });
  }
  
  graphs(){
    this.displayName='graph';
    this.getAllorganism();
  }
  start() {
    console.log('Clicked');
    this.graphs();
    
    this.simIntervalId = setInterval(() => {
      this.planetService.simulate('reproduce').subscribe((response: any) => {
        console.log(response,'Resproduce');
        response['simulated'].forEach((r: string) => {
          this.reproduce.set(r, this.reproduce.get(r)+1);
        });
        this.reproducedCnt += response['simulated'].length;
        console.log(this.reproduce,"reproduce");
      });
      this.getAllorganism();
      this.updateChart();
      this.updateLineChart();
    }, 5000);
    this.repIntervalId = setInterval(() => {
      this.planetService.simulate('hunting').subscribe((response: any) => {
        console.log(response,'hunting');
        response['simulated'].forEach((r: string) => {
          this.hunted.set(r, this.hunted.get(r)+1);
        });
        this.huntedCnt += response['simulated'].length;
        console.log(this.hunted);
      });
      this.getAllorganism();
      this.updateChart();
    }, 5000);
  }
  
  stopInterval(): void {
    if (this.simIntervalId || this.repIntervalId) {
      if(this.simIntervalId) clearInterval(this.simIntervalId);
      if(this.repIntervalId) clearInterval(this.repIntervalId);
      this.repIntervalId = null;
      this.simIntervalId = null; 
      this.displayName='simulation';
      this.chart = null;
      this.chartline=null;
    } else {
      console.warn('Interval ID is not set');
    }
  }

  calculateSpeciesCount(): void {
    const speciesMap = new Map<string, number>();

    this.organisms.forEach(organism => {
      const species = organism.species;
      speciesMap.set(species, (speciesMap.get(species) || 0) + 1);
    });
const currentYear = '2022'; 
const h = this.hunted;
    this.speciesData = Array.from(speciesMap).map(([species, count]) => ({ species, count, year: currentYear }));
    this.updateChart();
    this.updateLineChart();
    // this.createChart();
  }
  getHuntedCount(species: string): number {
    return this.hunted.get(species) || 0;
  }
  getReproducedCount(species: string): number {
    return this.reproduce.get(species) || 0;
  }
  updateChart(): void {
    if (this.chart) {
      const chartData = this.speciesData.map(d => ({ name: d.species, y: d.count }));
      const categories = this.speciesData.map(d => d.species);

      this.chart.xAxis[0].setCategories(categories, false);
      this.chart.series[0].setData(chartData, true);
    } else {
      
      // this.createChart();
       this.createChartBar();
    }
  }

  updateLineChart(): void {
    if (this.chartline) {
      const lineChartData = this.speciesData.map(d => ({ name: d.species, y: d.count }));
      const categories = this.speciesData.map(d => d.species);
  
      this.chartline.xAxis[0].setCategories(categories, false);
      this.chartline.series[0].setData(lineChartData, true);
    } else {
      this.createChartline();
    }
  }
  


 //bar graph

 createChartBar() {
  if (this.speciesData.length > 0) {
    // const colors: { [key: string]: string } = {
    //   'Human': '#4CAF50',
    //   'Lion': '#FF9800',
    //   'Giraffee': '#F44336',
    //   'Eagle': '#009688',
    //   'Pigeon': '#3F51B5',
    //   'cell': '#000'
    // };

    const chartData = this.speciesData.map(dataPoint => ({
      name: dataPoint.species,
      y: dataPoint.count,
      // color: colors[dataPoint.species] || '#000' 
    }));

    this.chart = Highcharts.chart('containerbar', {
      title: {
        text: 'Species Remaining'
      },
      chart: {
        type: 'column'
      },
      xAxis: { 
        title: {
          text: 'Species'
        },
        categories: this.speciesData.map(d => d.species) 
      },
      yAxis: { 
        title: {
          text: 'Count'
        }
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

// newbar
// createChartBar() {
//   if (this.speciesData.length > 0) {
    
//     const speciesNames = this.speciesData.map(data => data.species);
//     const countsBySpecies = this.speciesData.map(data => data.count);

    
//     const years = Array.from({ length: 10 }, (_, i) => (2020 + i).toString());

    
//     const seriesData: Highcharts.SeriesLineOptions[] = speciesNames.map((species, index) => {
//       return {
//         name: species,
//         type: 'line',
//         data: countsBySpecies.map((count, idx) => [years[idx], count])
//       };
//     });

   
//     const chartOptions: Highcharts.Options = {
//       title: {
//         text: 'Species Count Over Years'
//       },
//       xAxis: {
//         title: {
//           text: 'Year'
//         },
//         categories: years
//       },
//       yAxis: {
//         title: {
//           text: 'Count'
//         }
//       },
//       series: seriesData
//     };

    
//     this.chart = Highcharts.chart('containerbar', chartOptions);

//   } else {
//     console.warn('No data available for chart');
//   }
// }












createChartline() {
  if (this.speciesData.length > 0) {
    const chartDataline = this.speciesData.map(dataPoint => ({
      name: dataPoint.species,
      y: dataPoint.count
    }));

    this.chartline = Highcharts.chart('containerline', {
      title: {
        text: 'Species Remaining'
      },
      chart: {
        type: 'line'
      },
      xAxis: {
        title: {
          text: 'Species'
        },
        categories: this.speciesData.map(d => d.species)
      },
      yAxis: {
        title: {
          text: 'Count'
        }
      },
      series: [{
        name: 'Species Count',
        type: 'line',
        data: chartDataline
      }]
    });
  } else {
    console.warn('No data available for chart');
  }
}

  

  
  
  
  
  
  
  
  
  
  getAllorganism() {
    console.log('spieces')
    this.planetService.getorganisms().subscribe(
      (response: any) => {
        this.organisms = response;
        this.organismCount = this.organisms.length;
       this.giraffeeCount = this.organisms.filter(organism => organism.species === 'Giraffee').length;
        console.log(this.giraffeeCount,"gcount");
        this.humanCount = this.organisms.filter(organism => organism.species === 'Human').length;
        console.log(this.humanCount,"hcount");
        this.lionCount = this.organisms.filter(organism => organism.species === 'Lion').length;
        console.log(this.lionCount,"licount");
        this.egaleCount = this.organisms.filter(organism => organism.species === 'Eagle').length;
        console.log(this.egaleCount,"eacount");
        this.pigeonCount = this.organisms.filter(organism => organism.species === 'Pigeon').length;
        console.log(this.pigeonCount,"picount");
        this.cellCount = this.organisms.filter(organism => organism.species === 'Cell').length;
        console.log(this.cellCount,"cellcount");
        this.calculateSpeciesCount();
        console.log(response,'spieces')
      }
    );
  }
}