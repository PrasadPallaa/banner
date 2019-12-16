import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
