import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Parser, HtmlRenderer } from 'commonmark';
import { ActivatedRoute, Router } from '@angular/router';
import * as commonmark from "commonmark";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  post: Post;
  title: String;
  body: String;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPost();
    var reader = new commonmark.Parser();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(id);

    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var title_parsed = reader.parse(this.post.title);
    var title_result = writer.render(title_parsed);

    var body_parsed = reader.parse(this.post.body);
    var body_result = writer.render(body_parsed);

    this.title = title_result;
    this.body = body_result;
    console.log(body_result);
  }
}
