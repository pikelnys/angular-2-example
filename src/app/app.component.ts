import { Component } from '@angular/core';
import { Todo } from './todo-list/todo'
import { TodoService } from './todo-list/todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: [TodoService]
})
export class AppComponent {
  todos: Array<Todo> = [];

  constructor(private todoService: TodoService) {
    console.log('asdas')
    todoService.getTodos().then(todos => this.todos = todos);
  }

  isComplete(todo: Todo, completed: boolean) {
    todo.completed = completed;
  }
}
