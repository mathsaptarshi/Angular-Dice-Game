import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dice';
  public diceFace:number=1;
  public runNoOfTime:number=0;
  public isItFinalResult:boolean=false;
  public finalResult:number=0;

  roll(){
    this.runNoOfTime = 0;
    this.isItFinalResult = false;
    let interval = setInterval(()=>{
      this.runNoOfTime += 1;
      if(this.runNoOfTime == 60){
        this.isItFinalResult = true;
        clearInterval(interval);
        this.runNoOfTime = 0;
      }
      this.generateRandomFace();
    },100)
  }

  generateRandomFace(){
    this.diceFace = this.randomNumber1(1,6);
    if(this.isItFinalResult){
      this.finalResult = this.diceFace;
    }
    
  }

  randomNumber(min:number, max:number) {
    let num = Math.random() * (max - min) + min;
    return  parseInt(num.toFixed(1));
  }


  randomNumber1(min:number, max:number) {
    let now = new Date();
    
    let firstDigit = String(now.getMilliseconds())[0];
    console.log(firstDigit);
    let num = Math.random() * (max - min) + min;
    return  parseInt(num.toFixed(1));
  }

  reset(){
    this.diceFace = 1;
    this.runNoOfTime = 0;
    this.finalResult = 0;
    this.isItFinalResult = false;
  }
}
