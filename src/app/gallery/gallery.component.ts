import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images = Array(10).fill(4).map((x,i)=>i);
  constructor() { }

  ngOnInit(): void {
  }

}
