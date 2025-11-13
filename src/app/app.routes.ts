import { Routes } from '@angular/router';

import { UsersComponent } from './pages/users/users';
import { PostsComponent } from './pages/posts/posts';
import { PostsTableComponent } from './pages/posts-table/posts-table';
import { TodosComponent } from './pages/todos/todos';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsTableComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'todos/:id', component: TodosComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
