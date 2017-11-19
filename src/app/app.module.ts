import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MyblogService} from "./myblog.service";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './blog/home/home.component';
import { MyblogComponent } from './blog/myblog/myblog.component';
import { OperationsComponent } from './blog/operations/operations.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';

const approutes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: OperationsComponent},
  {path: "myblog", component: MyblogComponent},
  {path:"addBlog", component: AddBlogComponent},
  {path:"login",component: AppComponent},
  {path: "**", component: OperationsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    HomeComponent,
    MyblogComponent,
    OperationsComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [MyblogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
