import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MakeAPostComponent } from "./components/make-a-post/make-a-post.component";
import { SeePostsComponent } from "./components/see-posts/see-posts.component";

const routes: Routes = [
  { path: "make-a-post", component: MakeAPostComponent },
    { path: "see-posts", component: SeePostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
