import { Injectable } from '@angular/core';
import { Job } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})
export class JobService {

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

constructor() { }

}
