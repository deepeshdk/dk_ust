import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      skills: new FormArray([
        this.skillField()
      ])
    });
  }

  removeSkill(i: number) {
    (this.registrationForm.get('skills') as FormArray).removeAt(i);
  }

  skillField() {
    return new FormGroup({
      skill: new FormControl(),
      rating: new FormControl()
    });
  }

  addSkill() {
    (this.registrationForm.get('skills') as FormArray).push(this.skillField());
  }

  printForm() {
    console.log(this.registrationForm.value);
  }

}
