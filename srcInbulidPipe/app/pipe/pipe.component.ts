import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit 
{
  name = "Marvellous Infosystems";
  today = new Date();
  no = 32.389623;

  age : number = 0;
  showAge :any;
  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
  constructor() { }

  public Institute = 
  {
    "Name" : "Marvellous",
    "Location" : "Pune"
  }

  ngOnInit() {
  }

}
