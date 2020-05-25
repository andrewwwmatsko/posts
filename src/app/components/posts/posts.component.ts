import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'
import { Router } from '@angular/router'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  
})

export class PostsComponent implements OnInit {

  posts=[]

  constructor(private postsService: PostsService, private router:Router) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts=> {
      this.posts=posts
    })
  }
  
  viewPosts(id){
    this.router.navigate(['/post',id])
  }
}
