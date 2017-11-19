import { Component, OnInit } from '@angular/core';
import {MyblogService} from "../../myblog.service";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private request: MyblogService) { }

  blogs: Object[];
  ngOnInit() {
    this.loadBlogs();
  }
  loadBlogs(){
    this.request.getAllBlogs()
      .subscribe((data) => {
        this.blogs = data;
        console.log(data);
      })
  }

  deleteBlog(blog){
     this.request.deleteBlog(blog.id)
       .subscribe((data) => {
       this.loadBlogs();
       })
  }

  updateBlog(blog){
    this.request.updateBlog(blog)
      .subscribe((data) => {
        this.loadBlogs();
      })
  }
}
