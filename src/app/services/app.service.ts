import { Injectable } from '@angular/core';
import { Person, Job } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  jobs: Job[] = [
    {
      id: 1,
      name: "Developer"
    },
    {
      id: 2,
      name: "Doctor"
    },
    {
      id: 3,
      name: "Manager"
    },
    {
      id: 4,
      name: "Devops"
    },
    {
      id: 5,
      name: "Tester"
    }
  ];

  persons: Person[] = [
    {
      id: 1,
      jobId: this.jobs[0].id,
      name: "Sandro",
      lastname: "Bakhtadze"
    },
    {
      id: 2,
      jobId: this.jobs[3].id,
      name: "Giorgi",
      lastname: "Bakhtadze"
    },
    {
      id: 3,
      jobId: this.jobs[0].id,
      name: "Giorgi",
      lastname: "Bazerashvili"
    },
    {
      id: 4,
      jobId: this.jobs[1].id,
      name: "John",
      lastname: "Doe"
    },
  ]

constructor() { }

}
