import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todos.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodosByUser(userId: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
  }
}
