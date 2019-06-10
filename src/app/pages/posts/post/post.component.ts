import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Output() clickPost = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    // Emitir el evento
    this.clickPost.emit(this.post.id);
  }
}
