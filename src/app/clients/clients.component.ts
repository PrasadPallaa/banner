import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  id = "654879548984";
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
