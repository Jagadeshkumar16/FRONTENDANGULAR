import { Component } from '@angular/core';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrl: './feeding.component.scss'
})
export class FeedingComponent {
 MAX_HYDRATION_LEVEL:number= 100;
 totalWaterDrank: number = 0;
 totallionWaterDrank:number=0;
  selectedOrganism: string = '';
  hydrationLevel: number = 0;
  MAX_Lion_HYDRATION_LEVEL:number=100;
  lionhydrationLevel:number=0;
  sleepHour:number=0;
  optionFood:string='';
  Human: string[] = ['Drink water','Eat food','Work','Sleep'];
  Lion: string[] = ['Eat Deer', 'Eat Zebra','Chase Animals','Drink water'];
  Cow: string[] = ['Eat Grass', 'Gives Milk','Drink water'];
  Parrot: string[] = ['Fly', 'Eat fruits','Drink water'];
  selectedOrganismType: string = '';
  food: number=0;
  work: number=0;
  zebra: string ='';
  chase: string='';
  deer: string='';
  cowhydrationLevel: number=0;
  cowtotalWaterDrank: number=0;
  grass: string = '';
  Milk: string = '';
  parrothydrationLevel: number = 0;
  parrottotalWaterDrank: number=0;
  fly: string = '';
  fruits: string = '';

  updateFoodDropdown(organismType: string): string[] {
    switch (organismType) {
      case 'Human':
        return this.selectedOrganism === 'Human' ? this.Human : [];
      case 'Lion':
        return this.Lion;
      case 'Cow':
        return this.Cow;
      case 'Parrot':
        return this.Parrot;
      default:
        return [];
    }
  }

  foodOptions() {
    console.log('Selected Organism:', this.selectedOrganism);
  console.log('Food options:', this.updateFoodDropdown(this.selectedOrganism));
    if (this.selectedOrganism === 'Human') {
      this.sleepHour = 0;
      this.food=0;
      this.work = 0;
      this.zebra='';
      this.deer='';
      this.chase='';
      this.hydrationLevel = 0;
      this.cowhydrationLevel = 0;
      this.lionhydrationLevel=0;
      this.Milk='';
      this.grass='';
      this.fly='';
      this.fruits='';
      this.parrothydrationLevel = 0;
      if (this.optionFood === 'Drink water') {
        this.sleepHour = 0;
        this.food=0;
        this.work = 0;
        this.zebra='';
        this.deer='';
        this.chase='';
        this.lionhydrationLevel += 0;
        this.hydrationLevel += 33;
  
        if (this.hydrationLevel > this.MAX_HYDRATION_LEVEL) {
          this.hydrationLevel = this.MAX_HYDRATION_LEVEL;
        }
        if (this.hydrationLevel === this.MAX_HYDRATION_LEVEL) {
          this.totalWaterDrank = 3;
        } 
        if (this.hydrationLevel % 33 === 0 && this.hydrationLevel !== 0) {
          this.totalWaterDrank++ ;
        }
        
        console.log('Hydration level:', this.hydrationLevel);
        console.log('Total water drank:', this.totalWaterDrank);
      }
  
      
      if (this.optionFood === 'Sleep') {
        this.hydrationLevel=0;
        this.work = 0;
         this.food=0;
        this.sleepHour = 6;

      }
      if(this.optionFood === 'Eat food'){
        this.hydrationLevel=0;
        this.sleepHour = 0;
        this.work = 0;
         this.food=3
      }
      if(this.optionFood === 'Work'){
        this.hydrationLevel=0;
        this.sleepHour = 0;
         this.food=0;
        this.work = 6
      }
    }
  else if (this.selectedOrganism === 'Lion') {
    this.sleepHour = 0;
    this.food=0;
    this.work = 0;
    this.zebra='';
    this.deer='';
    this.chase='';
    this.hydrationLevel = 0;
    this.cowhydrationLevel = 0;
    this.lionhydrationLevel=0;
    this.Milk='';
    this.grass='';
    this.fly='';
    this.fruits='';
    this.parrothydrationLevel = 0;
    if(this.optionFood === 'Drink water'){
      this.deer='';
      this.chase='';
      this.zebra='';
      this.lionhydrationLevel += 33;
  
      if (this.lionhydrationLevel > this.MAX_Lion_HYDRATION_LEVEL) {
        this.lionhydrationLevel = this.MAX_Lion_HYDRATION_LEVEL;
      }
  
      
      if (this.lionhydrationLevel === this.MAX_Lion_HYDRATION_LEVEL) {
        this.totallionWaterDrank = 7;
      } else {
        this.totallionWaterDrank += 0.7;
      }
  
     
      if (this.lionhydrationLevel % 33 === 0 && this.lionhydrationLevel !== 0) {
        this.totallionWaterDrank++;
      }
    }
    if(this.optionFood === 'Eat Zebra'){
      this.lionhydrationLevel=0;
      this.deer='';
      this.chase='';
      this.zebra='zebra';
      

    }
    if(this.optionFood === 'Chase Animals'){
      this.lionhydrationLevel=0;
      this.zebra='';
      this.deer='';
      this.chase='chasing Animals';
    }
    if(this.optionFood === 'Eat Deer'){
      this.lionhydrationLevel=0;
      this.zebra='';
      this.chase='';
      this.deer='Deer';
    }
  }
  if (this.selectedOrganism === 'Cow'){
    this.sleepHour = 0;
    this.food=0;
    this.work = 0;
    this.zebra='';
    this.deer='';
    this.chase='';
    this.hydrationLevel = 0;
    this.cowhydrationLevel = 0;
    this.lionhydrationLevel=0;
    this.Milk='';
    this.grass='';
    this.fly='';
    this.fruits='';
    this.parrothydrationLevel = 0;
    
    if (this.optionFood === 'Drink water') {
      this.Milk='';
      this.grass='';
      this.cowhydrationLevel += 33;

      if (this.cowhydrationLevel > this.MAX_HYDRATION_LEVEL) {
        this.cowhydrationLevel = this.MAX_HYDRATION_LEVEL;
      }
      if (this.cowhydrationLevel === this.MAX_HYDRATION_LEVEL) {
        this.cowtotalWaterDrank = 3;
      } 
      if (this.cowhydrationLevel % 33 === 0 && this.cowhydrationLevel !== 0) {
        this.cowtotalWaterDrank++ ;
      }
      
      console.log('Hydration level:', this.hydrationLevel);
      console.log('Total water drank:', this.totalWaterDrank);
    }
    if(this.optionFood === 'Eat Grass'){
        this.Milk = "";
        this.cowhydrationLevel =0;
        this.grass='Grass for the Cow'
    }
    if(this.optionFood === 'Gives Milk'){
      this.cowhydrationLevel =0;
      this.grass='';
      this.Milk='Cow giving Milk'
    }
   
  }
  if (this.selectedOrganism === 'Parrot'){
    this.sleepHour = 0;
    this.food=0;
    this.work = 0;
    this.zebra='';
    this.deer='';
    this.chase='';
    this.hydrationLevel = 0;
    this.cowhydrationLevel = 0;
    this.lionhydrationLevel=0;
    this.Milk='';
    this.grass='';
    this.fly='';
    this.fruits='';
    this.parrothydrationLevel = 0;
    if (this.optionFood === 'Drink water') {
      this.fruits='';
      this.fly='';
      this.parrothydrationLevel += 33;
     
      if (this.parrothydrationLevel > this.MAX_HYDRATION_LEVEL) {
        this.parrothydrationLevel = this.MAX_HYDRATION_LEVEL;
      }
      if (this.parrothydrationLevel === this.MAX_HYDRATION_LEVEL) {
        this.parrottotalWaterDrank = 3;
      } 
      if (this.parrothydrationLevel % 33 === 0 && this.parrothydrationLevel !== 0) {
        this.parrottotalWaterDrank++ ;
      }
      
      console.log('Hydration level:', this.hydrationLevel);
      console.log('Total water drank:', this.totalWaterDrank);
    }
    if(this.optionFood === 'Fly'){
      this.fruits='';
      
      this.parrothydrationLevel = 0;
      this.fly='The parrot is flying'
    }
    if(this.optionFood === 'Eat fruits'){
     
      this.fly='';
      this.parrothydrationLevel = 0;
      this.fruits='Parrot is eating Fruit';
    }
}
  

}
}