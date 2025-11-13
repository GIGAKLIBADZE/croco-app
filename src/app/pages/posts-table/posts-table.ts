import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPostWithUser } from './posts-table.model';

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [],
  templateUrl: './posts-table.html',
  styleUrls: ['./posts-table.scss'],
})
export class PostsTableComponent implements OnInit {
  posts: IPostWithUser[] = [];
  selected: IPostWithUser | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<IPostWithUser[]>(
        'https://jsonplaceholder.typicode.com/posts?_expand=user'
      )
      .subscribe((data) => {
        this.posts = data.map((p) => ({
          id: p.id,
          title: p.title,
          body: p.body,
          user: {
            id: p.user?.id,
            name: p.user?.name,
          },
        }));
      });
  }

  open(post: IPostWithUser) {
    this.selected = post;
  }

  close() {
    this.selected = null;
  }
}
