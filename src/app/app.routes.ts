import { Routes } from '@angular/router';
import { AddTodoItemComponent } from './features/todos/components/add-todo-item/add-todo-item.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
export const routes: Routes = [
  { path: 'AddTodoItem', component: AddTodoItemComponent },
  { path: 'TodoList', component: TodoListComponent },
];
