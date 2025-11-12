import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IPost } from './posts.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.scss']
})
export class PostsComponent {
  posts: IPost[] = [];
  userId!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
      .subscribe(data => this.posts = data);
  }
}
