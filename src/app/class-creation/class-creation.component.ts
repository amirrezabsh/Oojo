import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-class-creation',
  templateUrl: './class-creation.component.html',
  styleUrls: ['./class-creation.component.scss']
})

export class ClassCreationComponent implements OnInit {
  languages :string[] = ["اسپانیایی","فرانسوی","انگلیسی"].sort();
  types :string[] = ["خصوصی","عمومی"].sort();
  times :string[] = ["دقیقه 30"," 60 دقیقه","90 دقیقه" , "120 دقیقه" ];
  tmp = new Array();
  hours = new Array();
  minutes = new Array();
  constructor() { 
    for (let index = 0; index < 100; index++) {
      this.tmp.push(index);
    }
    for (let index = 0; index < 24; index++) {
      if (index<10) {
        this.hours.push("0"+index);
      }
      else{
        this.hours.push(index);
      }
      
    }
    for (let index = 0; index < 61; index++) {
      if (index<10) {
        this.minutes.push("0"+index);
      }
      else{
        this.minutes.push(index);
      }
      
    }
    
  }

  ngOnInit(): void {
  }

}
