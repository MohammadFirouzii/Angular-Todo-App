import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { response } from 'express';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'http://localhost:1337/api/tasks';
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
  getTask(): Observable<TodoItem[]> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        return response.data.map((item: any): TodoItem => {
          return {
            id: item.id,
            task: item.task,
            completed: item.completed,
          };
        });
      })
    );
  }
}
