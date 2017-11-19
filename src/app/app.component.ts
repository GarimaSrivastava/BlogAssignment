import { Component } from '@angular/core';
import {MyblogService} from "./myblog.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: Object[];
  ob: boolean= false;
  constructor(private request: MyblogService,private router: Router){
  }

  login(login_credentials){
     this.request.getUserId(login_credentials)
       .subscribe((data) => {
         this.users = data;
         this.users.forEach(abc => {
           if (abc['name'] == login_credentials.name && abc['password'] == login_credentials.password) {
             this.ob=true;
             localStorage.setItem("currentUser",JSON.stringify(abc));
           }
         })
       })

  }

  logout(val){
    this.ob=false;
    this.router.navigate(['/']);
  }
}
