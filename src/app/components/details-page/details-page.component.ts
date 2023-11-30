import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private getService: PostsService) {
    // console.log(this.posts);
  }

  ngOnInit(): void {
    this.getService.getPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
