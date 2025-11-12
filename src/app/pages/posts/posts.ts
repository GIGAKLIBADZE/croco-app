import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface IPost { userId:number; id:number; title:string; body:string; }

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.scss']
})
export class PostsComponent {
  userId!: number;
  posts: IPost[] = [];
  selected: IPost | null = null; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
      .subscribe(d => this.posts = d);
  }

  open(post: IPost){ this.selected = post; }
  close(){ this.selected = null; }
}
