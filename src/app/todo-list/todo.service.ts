import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  getTodos(): Promise<Array<Todo>> {
    return Promise.resolve([
      { content: 'something', completed: false },
      { content: 'something else', completed: false },
      { content: 'and another thing', completed: false },
    ]);
  }

}
