import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyblogService} from "../myblog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  constructor(private request: MyblogService,private router: Router) { }

@Output() logout1: EventEmitter<any>=new EventEmitter<any>();
  link = {
    home: ["/home"],
    myblog: ["/myblog"],
    login: ["/login"]
  }


  ngOnInit() {

  }


  logout(){
    localStorage.setItem("currentUser","");
    this.logout1.emit(true);
  }
}
