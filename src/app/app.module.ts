import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsPageComponent } from './components/active-posts-page/active-posts-page.component';
import { InactivePostsPageComponent } from './components/inactive-posts-page/inactive-posts-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { DetailsPageComponent } from './components/details-page/details-page.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active-posts',
    component: ActivePostsPageComponent,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsPageComponent,
  },
  {
    path: 'active-posts/details',
    component: DetailsPageComponent,
  },
  {
    path: 'inactive-posts/details',
    component: DetailsPageComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostsPageComponent,
    InactivePostsPageComponent,
    PostCardComponent,
    UppercasePipe,
    HighlightDirective,
    DetailsPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
