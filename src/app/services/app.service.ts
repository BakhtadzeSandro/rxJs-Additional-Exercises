import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, Job } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  persons: Person[] = [
    {
      id: 1,
      jobId: 1,
      name: "Sandro",
      lastname: "Bakhtadze"
    },
    {
      id: 2,
      jobId: 4,
      name: "Giorgi",
      lastname: "Bakhtadze"
    },
    {
      id: 3,
      jobId: 1,
      name: "Giorgi",
      lastname: "Bazerashvili"
    },
    {
      id: 4,
      jobId: 2,
      name: "John",
      lastname: "Doe"
    },
  ]


constructor() { }


}
