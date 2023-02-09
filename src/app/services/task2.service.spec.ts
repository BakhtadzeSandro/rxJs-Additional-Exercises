/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Task2Service } from './task2.service';

describe('Service: Task2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Task2Service]
    });
  });

  it('should ...', inject([Task2Service], (service: Task2Service) => {
    expect(service).toBeTruthy();
  }));
});
