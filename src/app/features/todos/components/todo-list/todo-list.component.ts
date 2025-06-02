import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}
  todoList: undefined | TodoItem[] = [];
  ngOnInit() {
    this.todoService.getTask().subscribe((result) => {
      console.log(result);
      if (result) {
        this.todoList = result;
      }
    });
  }
}
