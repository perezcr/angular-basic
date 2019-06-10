import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // mensajes: any[] = [];
  mensajes: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    /* this.dataService.getPosts().subscribe((posts: any[]) => {
      this.mensajes = posts;
    }); */
    this.mensajes = this.dataService.getPosts();
  }

  listenClick(id: number) {
    console.log(`Click on ${id}`);
  }
}
