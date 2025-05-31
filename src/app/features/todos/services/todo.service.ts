import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'http://localhost:1337/api/tasks';
  todoList: TodoItem[] = [];
  newTask: string = '';
  constructor(private http: HttpClient) {}

  sentTask() {
    const newTodoItem: TodoItem = {
      task: this.newTask,
      completed: false,
    };
    console.log(newTodoItem);
    this.http
      .post(this.apiUrl, {
        data: newTodoItem,
      })
      .subscribe({
        next: (respose) => {
          console.log(respose);
        },
      });
  }
}
