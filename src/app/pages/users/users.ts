import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IUser } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class UsersComponent {
  users: IUser[] = [];
  filteredUsers: IUser[] = [];
  query: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data.map(user => {
          const [firstName, ...lastNameParts] = user.name.split(' ');
          return {
            ...user,
            firstName,
            lastName: lastNameParts.join(' ')
          };
        });
        this.filteredUsers = this.users;
      });
  }

  onSearch() {
    const q = this.query.toLowerCase();
    this.filteredUsers = this.users.filter(u =>
      u.firstName.toLowerCase().includes(q) ||
      u.lastName.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    );
  }
}
