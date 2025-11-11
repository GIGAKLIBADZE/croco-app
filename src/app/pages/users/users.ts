import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IUser } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class UsersComponent {
 users: IUser[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
      this.users = data.map(user => {
        const [firstName, ...lastNameParts] = user.name.split(" ");

        return {
          ...user,  
          firstName,
          lastName: lastNameParts.join(" ")
        };
      });
    });
}

}

