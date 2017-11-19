import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {MyblogService} from "../../myblog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request:MyblogService, private router:Router) { }
  value:boolean=false;
  title;
  description;
  category;
  item;
  user;
  val:boolean =false;
  __filterCategory: string;
  get filterCategory(): string {
    return this.__filterCategory;
  }
  set filterCategory(value: string){
    this.val=true;
    this.__filterCategory = value;
    this.filteredBlogs = this.filterCategory ? this.performFilter(this.filterCategory) : this.blogs;
  }

  filteredBlogs;
  favName: String[]= [""];


  link = {
    addBlog: ["/addBlog"],
  }
  @Input() blogs;
  @Output() deleteBlogOut: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateBlogOut: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem("currentUser"));

  }


  performFilter(filterBy: string): any[]{
    filterBy = filterBy.toLocaleLowerCase();
    var abc: Object[]=[{}];
    console.log(filterBy);
    for(var data=0;data<this.blogs.length;data++){
      console.log("hi");
      console.log(this.blogs[data].category);
      if(this.blogs[data].category==filterBy){
        abc.push(this.blogs[data]);
        console.log(this.blogs[data].postedBy.name);

      }
    }
    return abc;
  }

  fav(blog){
    this.user= JSON.parse(localStorage.getItem("currentUser"));
    var favs= this.user.favourites;
    var count=0;
    for(var data=0;data<favs.length;data++){
        if(favs[data]==blog.id){
          this.favName[blog.id]="Marked";
          count=1;
          break;
        }
      }
      if(count==0){
        this.favName[blog.id]="Mark as favourite";
      }
  }

  loadBlog(blog,val){
    this.title= blog.title;
    this.description= blog.description;
    this.category=blog.category;
    this.value=val;
    this.item=blog;

  }

  updateBlog(title,description,category){
    this.item.title= title;
    this.item.description= description;
    this.item.category= category;
    this.updateBlogOut.emit(this.item);
    this.value=false;
  }

  deleteBlog(blog){
     this.deleteBlogOut.emit(blog);
  }

  backButton(){
    this.value=false;

  }

  favouriteBlog(blog){
    console.log(this.favName[blog.id]);
    if(this.favName[blog.id]=="Mark as favourite"){
      this.user.favourites.push(blog.id);
      console.log(this.user);
      this.request.addFavourites(this.user)
        .subscribe((data) => {
          this.favName[blog.id]="Marked";
          console.log(this.favName[blog.id]);
          this.fav(blog);
          this.user.favourites.push(blog.id);
          console.log(this.user);
          localStorage.setItem("currentUser",JSON.stringify(this.user));
        })
    }
  }
}
