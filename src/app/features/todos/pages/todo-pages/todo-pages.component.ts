import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TodoService } from '../../services/todo.service';
import { provideHttpClient } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-pages',
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './todo-pages.component.html',
  styleUrl: './todo-pages.component.css',
})
export class TodoPagesComponent {
  constructor(public todoService: TodoService) {}
}
