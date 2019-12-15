import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { STEP_ITEMS } from '../constants/multi-step-form';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private step: number = 0;
  private page:string = "About";

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.step < 3) {
      this.step = this.step + 1;
    }
  }

  previous() {
    if (this.step > 0) {
      this.step = this.step - 1;
    }
  }

  submit() {
    console.log("Submitted");
  }

}
