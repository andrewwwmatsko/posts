import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router'
import { from } from 'rxjs';

const routes :Routes =[
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'post/:id', 
    component:PostComponent
  },
  {
    path:'posts', 
    component:PostsComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
