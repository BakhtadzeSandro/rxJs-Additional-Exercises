import { Component } from '@angular/core';
import { interval, of, map, pipe, Subscriber, Observable, from } from 'rxjs';
import { AppService } from './services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test3';

  get persons(){
    return this.appService.persons;
  }

  get jobs(){
    return this.appService.jobs;
  }

  getPeople(job: string[]): Observable<String[]> {
    return of(
      this.persons.filter(person => {
        const jobName = this.jobs.find(el => el.id === person.jobId).name;
        return job.includes(jobName);
      }).map(person => {
        const jobName = this.jobs.find(el => el.id === person.jobId).name;
        return person.name + " " + person.lastname + " is a " + jobName;
      })
    );
  }


  ngOnInit(){
    // console.log(this.jobs);
    // console.log(this.persons);
    this.getPeople(["Developer", "Doctor"]).subscribe(x => console.log(x));
  }

  constructor(private appService: AppService) {}

}
