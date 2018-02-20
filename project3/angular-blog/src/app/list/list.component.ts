import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Post[];

  selectedPost: Post;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

  editPost(post: Post): void {
    this.selectedPost = post;
  }

  addPost(): void {
    this.editPost(this.blogService.newPost());
  }

}
