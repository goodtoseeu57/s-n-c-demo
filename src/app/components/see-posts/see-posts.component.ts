import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-see-posts",
  templateUrl: "./see-posts.component.html",
  styleUrls: ["./see-posts.component.scss"]
})
export class SeePostsComponent implements OnInit {
  posts = [];
  constructor(private postsService: PostsService, private sanitzer: DomSanitizer) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.posts.map((post) => this.sanitzer.bypassSecurityTrustHtml(post));
  }
}
