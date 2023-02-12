import { Component, OnInit } from '@angular/core';
import { Task2Service } from '../services/task2.service';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {

  get movies(){
    return this.task2Service.itemList;
  }
  
  loadedItems = 15;

  nextScroll(event){
    if(event.target.scrollTop + event.target.offsetHeight >= event.target.scrollHeight){
      setTimeout(() => {
        this.loadedItems = this.loadedItems + 10;
      }, 200)
    }
  }

  constructor(private task2Service: Task2Service) { }

}
