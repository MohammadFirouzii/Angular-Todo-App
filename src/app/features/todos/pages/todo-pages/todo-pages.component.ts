import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-pages',
  imports: [FormsModule],
  templateUrl: './todo-pages.component.html',
  styleUrl: './todo-pages.component.css',
})
export class TodoPagesComponent {
  constructor(public todoService: TodoService) {}
}
