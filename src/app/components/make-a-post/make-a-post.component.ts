import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Router } from "@angular/router";
import { PostsService } from "../../services/posts.service";
import "@github/markdown-toolbar-element";

@Component({
  selector: "app-make-a-post",
  templateUrl: "./make-a-post.component.html",
  styleUrls: ["./make-a-post.component.scss"]
})
export class MakeAPostComponent implements OnInit, OnChanges {
  public Editor = ClassicEditor;
  editorData = "";
  markdownData = "";
  htmlFromMarkDown = "";
  quill = true;
  markDown = true;

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.markdownData) {
      this.showMarkDownData();
    }
  }

  savePost() {
    this.postsService.savePost(this.editorData);
  }

  goToPosts() {
    this.router.navigateByUrl("see-posts");
  }

  showGithubMarkdown() {
    this.markDown = !this.markDown;
  }

  changed(ev) {
    console.log(ev);
    this.showMarkDownData();
  }

  showMarkDownData() {
    this.htmlFromMarkDown = this.parseMarkdown(this.markdownData);
    console.log(this.htmlFromMarkDown);
  }

  parseMarkdown(markdownText) {
    const htmlText = markdownText
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      .replace(/\*(.*)\*/gim, "<i>$1</i>")
      .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
      .replace(/\n$/gim, "<br />");

    return htmlText.trim();
  }
}
