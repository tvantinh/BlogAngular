import { Component, Input } from "@angular/core";
import { Post } from "../../PostModel/Post.model";

@Component({
  standalone: true,
  selector: "app-post-card",
  templateUrl: "./PostCard.component.html",
})
export class PostCardComponent {
  @Input() post?: Post;
}
