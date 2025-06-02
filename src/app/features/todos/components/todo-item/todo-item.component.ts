import { Component, Input } from '@angular/core';
import { TodoItem } from '../../models/todo.model';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() item!: TodoItem;

  toggleComplete() {
    this.item.completed = !this.item.completed;
  }
}
