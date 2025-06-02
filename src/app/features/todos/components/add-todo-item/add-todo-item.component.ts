import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TodoService } from '../../services/todo.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-todo-item',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css',
})
export class AddTodoItemComponent {
  constructor(public todoService: TodoService) {}
}
