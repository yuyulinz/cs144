import { Injectable } from '@angular/core';

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}

@Injectable()
export class BlogService {

	private posts: Post[];

  constructor() {
  	fetchPosts();
  }

//	localStorage.setItem("lastname", JSON.stringify(mypost));

  fetchPosts(): void {
  	if (typeof(Storage) !== "undefined") {
	  	if(localStorage.getItem("posts") != null){
		    this.posts = JSON.parse(localStorage.getItem("posts"));
		  } else {
		  	this.posts = [];
		  }
		} else {
			console.log("ERROR: Browser does not support Web Storage");
		}
  }

  getPosts(): Post[] {
  	return this.posts;
  }

/*
  getPost(id: number): Post {

  }

  newPost(): Post {

  }

  updatePost(post: Post): void {

  }

  deletePost(id: number): void {

  }
  */

}
