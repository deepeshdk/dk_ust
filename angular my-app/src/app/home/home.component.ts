import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentDate = Date.now();

  constructor() { }

  students: Student[] = [
    {
      name: 'Chacha',
      age: 60,
      degree: 'sslc',
      company: 'UST'
    },
    {
      name: 'Babu bhayya',
      age: 30,
      degree: 'be',
      company: 'capgemini'
    },
    {
      name: 'aishwarya',
      age: 35,
      degree: 'bsc',
      company: 'tcs'
    },
    {
      name: 'kamal',
      age: 45,
      degree: 'msc',
      company: 'itc'
    },
    {
      name: 'divya',
      age: 25,
      degree: 'btech',
      company: 'UST'
    }
  ];

  ngOnInit() {
  }

}
