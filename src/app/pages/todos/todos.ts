import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './todo.service';
import { ITodo } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss'],
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.params['id']);

    this.todoService.getTodosByUser(this.userId).subscribe((t) => {
      this.todos = t;
    });
  }
}
