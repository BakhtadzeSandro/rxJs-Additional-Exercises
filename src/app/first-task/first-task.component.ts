import { Component, OnInit, ViewChild } from '@angular/core';
import { Task2Service } from '../services/task2.service';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {

  get movies(){
    return this.task2Service.itemList;
  }

  constructor(private task2Service: Task2Service) { }

  ngOnInit() {
  }

}
