import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MyblogService} from "../../myblog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private router:Router,private request: MyblogService) { }
name;
  description;
category;
user;

  ngOnInit() {
  }



  addElement(title,desc,category){

    this.user= JSON.parse(localStorage.getItem('currentUser'));
    var blog={
      title: title,
      description: desc,
      category: category,
      postedBy: this.user,
      likes: 0,
      dislikes: 0
    }
    this.request.addBlogData(blog)
      .subscribe((data) =>{
      this.router.navigate(['home'])
        //this.items.push(data);
        //this.loadData();
      })

  }
}
