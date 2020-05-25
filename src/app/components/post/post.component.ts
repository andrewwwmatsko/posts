import { Component, OnInit } from '@angular/core';
import { PostsService} from '../../services/posts.service'
import { ActivatedRoute, Router } from '@angular/router'
import * as _ from "lodash"

type Post ={
  id:number,
  title:string,
  body:string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  id:number
  posts:any=[]
  post:Post

  constructor(private postsService:PostsService, private activeRout:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts=> {
      this.posts=posts
      this.id=Number(this.activeRout.snapshot.paramMap.get('id'))
      this.post=this.findPost(this.id)
      debugger
    })
    
    debugger
  }
  findPost(seachId){
    return  _.find(this.posts,(el)=>el.id === seachId)
   }

}
