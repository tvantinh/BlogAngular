import { CommonModule } from "@angular/common";
import { Component, OnInit, importProvidersFrom, inject } from "@angular/core";
import { Post } from '../../PostModel/Post.model';
import { PostService } from "../../PostsService/Post.service";
import { PostCardComponent } from "../PostCard/PostCard.component";

@Component({
  selector: 'app-student-list',
  templateUrl: './Post-list.component.html',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  private postService = inject(PostService);
  Posts: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.Posts = data;
      },
      error: (error) => {
        console.error('Lỗi khi gọi API:', error);
      },
      complete: () => {
        console.log('Hoàn thành việc lấy dữ liệu.');

      }
    });
  }

}
