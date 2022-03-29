import { Component, OnInit } from '@angular/core';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public imgs = Array(9).fill(4).map((x,i)=>i);
  public numberOfImages:number=0

  constructor(public menu:MenuService) { }

  ngOnInit(): void {
    this.numberOfImages = this.imgs.length;
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
