import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  step1 = true;
  step2 = false;
  step3 = false;
  constructor() { }

  ngOnInit() {
  }

  step1Next(){
    this.step2 = true
    this.step1 = false;
  }

  previousStep2(){
    this.step1 = true;
    this.step2 = false;
  }

  step2Next(){
    this.step3 = true;
    this.step2 = false;
  }

  previousStep3(){
    this.step2 = true;
    this.step3 = false;
  }
}
