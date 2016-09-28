/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('Service: TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoServiceService]
    });
  });

  it('should ...', inject([TodoServiceService], (service: TodoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
