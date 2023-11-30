import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: any[] = [];
  counter: number = 0;
  constructor() {}

  async getPosts() {
    if (this.counter === 0) {
      const result = await (await fetch('../../assets/db.json')).json();
      this.posts = result;
      // console.log(this.posts);
      this.counter++;
      return result;
    } else {
      const updatedPosts = this.posts;
      return updatedPosts;
    }
  }

  updatePosts(postIndex: number) {
    // console.log(this.posts);
    this.posts[postIndex].active = !this.posts[postIndex].active;
    // console.log(this.posts);
  }
}
