import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users';
import { PostsComponent } from './pages/posts/posts';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
