import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-active-posts-page',
  templateUrl: './active-posts-page.component.html',
  styleUrls: ['./active-posts-page.component.scss'],
})
export class ActivePostsPageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private getService: PostsService) {
    // console.log(this.posts);
  }

  ngOnInit(): void {
    this.getService.getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  callUpdatePost(postIndex: number) {
    this.getService.updatePosts(postIndex);
  }
}
