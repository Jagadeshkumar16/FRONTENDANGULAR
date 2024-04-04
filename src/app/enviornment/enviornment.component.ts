import { Component } from '@angular/core';

@Component({
  selector: 'app-enviornment',
  templateUrl: './enviornment.component.html',
  styleUrl: './enviornment.component.scss'
})
export class EnviornmentComponent {
  selectedWeatherType:string='';
  optionweather:string='';
  Rainy: string[] = ['Desert','Forest','Mountain'];
  Sunny: string[] = ['Desert','Forest','Mountain'];
  Snowy: string[] = ['Mountain','Forest'];
  Stormy: string[] = ['Desert','Forest','Mountain'];
  weatherRainyDesertUrl: string='';
  weatherRainyForestUrl: string='';
  weatherRainyMountainUrl: string='';
  weatherSunnyDesertUrl: string='';
  weatherSunnyForestUrl: string='';
  weatherSunnyMountainUrl: string='';
  weatherSnowyMountainUrl: string='';
  weatherSnowyForestUrl: string='';
  weatherStormyMountainUrl: string='';
  weatherStormyForestUrl: string='';
  weatherStormyDesertUrl: string='';
  updateweatherDropdown(wetaherType: string): string[] {
    switch (wetaherType) {
      case 'Rainy':
        return this.selectedWeatherType === 'Rainy' ? this.Rainy : [];
      case 'Sunny':
        return this.Sunny;
      case 'Snowy':
        return this.Snowy;
      case 'Stormy':
        return this.Stormy;
      default:
        return [];
    }
  }

  showenviornment(){
    if(this.selectedWeatherType === 'Rainy'){
      this.weatherSunnyMountainUrl='';
      this.weatherSunnyForestUrl = '';
      this.weatherSunnyDesertUrl='';
      this.weatherSnowyMountainUrl='';
      this.weatherSnowyForestUrl='';
      this.weatherStormyMountainUrl='';
      this.weatherStormyForestUrl = '';
      this.weatherStormyDesertUrl='';
      if(this.optionweather === 'Desert'){
        this.weatherRainyMountainUrl='';
        this.weatherRainyForestUrl='';
        this.weatherRainyDesertUrl = 'https://i.pinimg.com/originals/f5/ec/e0/f5ece080de68c72a28bdce73caee1fbc.gif';
      }
      if(this.optionweather === 'Forest'){
        this.weatherRainyDesertUrl='';
        this.weatherRainyMountainUrl='';
        this.weatherRainyForestUrl = 'https://i.pinimg.com/originals/91/70/43/917043f4aa8e19c175738e92759727cb.gif';
        
      }
      if(this.optionweather === 'Mountain'){
        this.weatherRainyDesertUrl='';
        this.weatherRainyForestUrl = '';
        this.weatherRainyMountainUrl='https://wallpaperaccess.com/full/633997.jpg';
        
      }
    }
    if(this.selectedWeatherType === 'Sunny'){
      this.weatherRainyDesertUrl='';
        this.weatherRainyForestUrl = '';
        this.weatherRainyMountainUrl='';
        this.weatherSnowyMountainUrl='';
        this.weatherSnowyForestUrl='';
        this.weatherStormyMountainUrl='';
        this.weatherStormyForestUrl = '';
        this.weatherStormyDesertUrl='';
      if(this.optionweather === 'Desert'){
        this.weatherSunnyMountainUrl='';
        this.weatherSunnyForestUrl = '';
        this.weatherSunnyDesertUrl='https://th.bing.com/th/id/OIP.n46FDvpRhWGS5QcecdPdtQHaEE?rs=1&pid=ImgDetMain';
      }
      if(this.optionweather === 'Forest'){
        this.weatherSunnyDesertUrl='';
        this.weatherSunnyMountainUrl='';
        this.weatherSunnyForestUrl='https://i.giphy.com/3oEduYJ5WzNGsAadKU.webp';
      }
      if(this.optionweather === 'Mountain'){
        this.weatherSunnyDesertUrl='';
        this.weatherSunnyForestUrl = '';
        this.weatherSunnyMountainUrl='https://c.tenor.com/VIwQyKzY508AAAAC/tenor.gif';
        
      }
    }
    if(this.selectedWeatherType === 'Snowy'){
        this.weatherRainyDesertUrl='';
        this.weatherRainyForestUrl = '';
        this.weatherRainyMountainUrl='';
        this.weatherSunnyMountainUrl='';
        this.weatherSunnyForestUrl = '';
        this.weatherSunnyDesertUrl='';
        this.weatherStormyMountainUrl='';
        this.weatherStormyForestUrl = '';
        this.weatherStormyDesertUrl='';
      if(this.optionweather === 'Forest'){
        this.weatherSnowyMountainUrl='';
        
        this.weatherSnowyForestUrl='https://img2.thejournal.ie/inline/1240918/original/?width=500&version=1240918';
      }
      if(this.optionweather === 'Mountain'){
       
        this.weatherSnowyForestUrl = '';
        this.weatherSnowyMountainUrl='https://i.gifer.com/origin/f9/f92d7aeaf38c8e08053c73249eeca1a0.gif';
        
      }
    }
    if(this.selectedWeatherType === 'Stormy'){
      this.weatherRainyDesertUrl='';
      this.weatherRainyForestUrl = '';
      this.weatherRainyMountainUrl='';
      this.weatherSunnyMountainUrl='';
      this.weatherSunnyForestUrl = '';
      this.weatherSunnyDesertUrl='';
      this.weatherSnowyMountainUrl='';
      this.weatherSnowyForestUrl='';
    if(this.optionweather === 'Desert'){
      this.weatherStormyMountainUrl='';
      this.weatherStormyForestUrl = '';
      this.weatherStormyDesertUrl='https://media1.tenor.com/images/b5e8c9bf5188e694358a9e0a918ce44e/tenor.gif?itemid=14197998';
      }
    if(this.optionweather === 'Forest'){
      this.weatherStormyMountainUrl='';
      this.weatherStormyDesertUrl='';
      this.weatherStormyForestUrl='https://i.pinimg.com/originals/a6/74/8c/a6748c016508042644c67a7cb55c1dce.gif';
    }
    if(this.optionweather === 'Mountain'){
      this.weatherStormyDesertUrl='';
      this.weatherStormyForestUrl = '';
      this.weatherStormyForestUrl='https://i.ytimg.com/vi/hqj3z2ytLdY/maxresdefault.jpg';
      
    }
  }
  }
}
