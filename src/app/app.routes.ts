import { Routes } from '@angular/router';
import { PostDetailComponent } from './client/PostManagement/PostDetailComponent/Post-detail.component';
import { PostFormComponent } from './client/PostManagement/PostFormComponent/Post-form.component';
import { PostListComponent } from './client/PostManagement/PostListComponent/Post-list.component';

export const routes: Routes = [
  {
    path: 'Post-detail',
    component: PostDetailComponent,
  },
  {
    path: 'Post-form',
    component: PostFormComponent,
   },
  {
    path: 'Post-list',
    component: PostListComponent,
   },
];
