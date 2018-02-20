import { Component, OnInit, Input } from '@angular/core';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() post: Post;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    //console.log(this.blogService.getPosts());
  }

  savePost(): void {
    var oldPost = this.blogService.getPost(this.post.postid);
    oldPost.title = this.post.title;
    oldPost.body = this.post.body;
    this.blogService.updatePost(oldPost);
  }

  deletePost(): void {
    this.blogService.deletePost(this.post.postid);
    delete this.post;
  }

}
