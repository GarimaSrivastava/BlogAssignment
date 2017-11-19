import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;

const LOGIN_URL = 'http://localhost:3000/users/';
const BLOG_URL = 'http://localhost:3000/blogs/';
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class MyblogService {

  constructor(private http: Http) { }
filterBy:string;

  getUserId(data){

    return this.http.get(LOGIN_URL).map(res => res.json());
  }

  getAllBlogs(){
    return this.http.get(BLOG_URL).map(res => res.json());
  }

  addBlogData(data){
    return this.http.post(BLOG_URL,data,header).map(res => res.json());
  }

  deleteBlog(id){
    return this.http.delete(`${BLOG_URL}${id}`).map(res => res.json());
  }

  updateBlog(data){
    return this.http.patch(`${BLOG_URL}${data.id}`,data,header).map(res => res.json());
  }

  addFavourites(data){
    return this.http.patch(`${LOGIN_URL}${data.id}`,data,header).map(res => res.json());
  }
}
