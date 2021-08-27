import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // data
  klm: number;
  age: number;
  weight: number;
  // air
  economyAir: number;
  advancedAir: number;
  luxAir: number;
  // rgd
  economyRgd: number;
  advancedRgd: number;
  luxRgd: number;
  // error air
  economyAirError: string;
  advancedAirError: string;
  luxAirError: string;
  // error rgd
  economyRgdError: string;
  advancedRgdError: string;
  luxRgdError: string;

  calcAmount(){
    this.calcAir();
    this.calcRgd();
  }

  calcAir(){
    this.calcAirEco();
    this.calcAirAdvanced();
    this.calcAirLux();
  }
  calcRgd(){
    this.calcRgdEco();
    this.calcRgdAdvanced();
    this.calcRgdLux();
  }

  calcAirEco():any{
    if(this.weight > 20) {
      return this.economyAirError = 'Максимальный вес багажа 20 кг';
    }
    if(this.weight > 5) {
      return this.economyAir = 4000 + this.klm * 4;
    } else {
      return this.economyAir = this.klm * 4;
    }
  }
  calcAirAdvanced():any{
    if(this.weight > 50) {
      return this.advancedAirError = 'Максимальный вес багажа 50 кг';
    }
    if(this.weight > 20 && this.age > 7) {
      return this.advancedAir = 5000 + this.klm * 8;
    }
    if(this.weight > 20 && this.age <= 7) {
      return this.advancedAir = 5000 + this.klm * 8 * 0.7;
    } 
    if(this.weight <= 20 && this.age > 7) {
      return this.advancedAir = this.klm * 8;
    }
    if(this.weight <= 20 && this.age <= 7) {
      return this.advancedAir = this.klm * 8 * 0.7;
    }
  }
  calcAirLux():any{
    if(this.weight > 50) {
      return this.luxAirError = 'Максимальный вес багажа 50 кг';
    }
    if(this.age > 16) {
      return this.luxAir = this.klm * 15;
    }
    if(this.age <= 16) {
      return this.luxAir = this.klm * 15 * 0.7;
    }
  }
  
  calcRgdEco():any{
    if(this.weight > 50) {
      return this.economyRgdError = 'Максимальный вес багажа 50 кг';
    }
    if(this.weight > 15 && this.age > 5) {
      return this.economyRgd = this.weight * 50 + this.klm * 0.5;
    }
    if(this.weight > 15 && this.age <= 5) {
      return this.economyRgd = this.weight * 50 + this.klm * 0.5 * 0.5;
    } 
    if(this.weight <= 15 && this.age > 5) {
      return this.economyRgd = this.klm * 0.5;
    }
    if(this.weight <= 15 && this.age <= 5) {
      return this.economyRgd = this.klm * 0.5 * 0.5;
    }
  }
  calcRgdAdvanced():any{
    if(this.weight > 60) {
      return this.advancedRgdError = 'Максимальный вес багажа 60 кг';
    }
    if(this.weight > 20 && this.age > 8) {
      return this.advancedRgd = this.weight * 50 + this.klm * 2;
    }
    if(this.weight > 20 && this.age <= 8) {
      return this.advancedRgd = this.weight * 50 + this.klm * 2 * 0.7;
    } 
    if(this.weight <= 20 && this.age > 8) {
      return this.advancedRgd = this.klm * 2;
    }
    if(this.weight <= 20 && this.age <= 8) {
      return this.advancedRgd = this.klm * 2 * 0.7;
    }
  }
  calcRgdLux():any{
    if(this.weight > 60) {
      return this.luxRgdError = 'Максимальный вес багажа 60 кг';
    }
    if(this.age > 16) {
      return this.luxRgd = this.klm * 4;
    }
    if(this.age <= 16) {
      return this.luxRgd = this.klm * 4 * 0.8;
    } 
  }
}