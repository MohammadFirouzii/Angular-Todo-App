import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: TodoItem[] = [];
  newTask: string = '';
}
