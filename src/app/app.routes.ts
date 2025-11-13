import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users';
import { PostsComponent } from './pages/posts/posts';
import { PostsTableComponent } from './pages/posts-table/posts-table';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'posts', component: PostsTableComponent }, 
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
