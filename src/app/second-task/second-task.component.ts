import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, startWith, takeUntil } from 'rxjs';
import { from, Subject, switchMap } from 'rxjs';
import { filter, map, of } from 'rxjs';
import { Item } from '../interfaces/persons';
import { Task2Service } from '../services/task2.service';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {

  get items(){
    return this.task2Service.itemList;
  }

  // itemName = "";
  // changeItemName(event: any){
  //   this.itemName = event.target.value;
  //   console.log(this.itemName);
  // }

  // search$ = from(this.items).pipe(
  //   filter(item => item.name.includes(this.itemName))
  // ).subscribe(x => console.log(x));

  itemName = "";
  itemName$ = new Subject<string>();

  changeItemName(event){
    this.itemName = event.target.value;
    this.itemName$.next(this.itemName);
  }

  search$ = this.itemName$.pipe(
    switchMap(name => of(this.items).pipe(
      map(arr => {
        return name ? arr.filter(item => item.name.includes(name)) : [];
      })
    )),
    debounceTime(500),
    distinctUntilChanged()
  )

  constructor(private task2Service: Task2Service) { }

  ngOnInit() {
  }

}
