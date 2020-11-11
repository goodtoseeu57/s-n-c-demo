import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MakeAPostComponent } from "./components/make-a-post/make-a-post.component";
import { SeePostsComponent } from "./components/see-posts/see-posts.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, MakeAPostComponent, SeePostsComponent],
  imports: [BrowserModule, AppRoutingModule, CKEditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
