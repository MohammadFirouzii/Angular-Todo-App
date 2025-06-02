import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoPagesComponent } from './features/todos/pages/todo-pages/todo-pages.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-Todo-App';
}
