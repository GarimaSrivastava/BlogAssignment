import { Component, OnInit } from '@angular/core';
import {MyblogService} from "../../myblog.service";

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  constructor(private request:MyblogService) { }

  user;
  blogs;
  favs;
  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem("currentUser"));
    this.favs=this.user['favourites'];
    this.loadBlogs();
  }

  loadBlogs(){
    this.request.getAllBlogs()
      .subscribe((data) => {
        this.blogs = data;
        console.log(data);
      })
    }



}
