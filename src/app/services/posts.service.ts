import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor() {}

  posts = [];

  savePost(post) {
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }
}
