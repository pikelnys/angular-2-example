import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
   todos: Array<Todo>;
   isComplete;

  ngOnInit() {
    console.log('inited')
  }

}
