import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Post } from "../PostModel/Post.model";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient){}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
