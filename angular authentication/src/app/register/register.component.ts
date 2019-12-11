import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  error: string;

  constructor(private auth: AuthService) { }

  register(form: NgForm) {
    this.error = null;
    this.auth.registerUser(form.value)
      .subscribe(res => {
        console.log(res);
        form.reset();
      }, err => {
        console.log(err);
        this.error = err.error.message;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.error = null;
  }

}
