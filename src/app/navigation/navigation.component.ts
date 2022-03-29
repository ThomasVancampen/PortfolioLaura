import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private menu:MenuService) {

  }

  ngOnInit(): void {
    let menuIcon:any|null = document.querySelector('.menuIcon');
    let nav:any|null = document.querySelector('.overlay-menu');

    menuIcon.addEventListener('click', () => {
        if (nav.style.transform != 'translateX(0%)') {
            nav.style.transform = 'translateX(0%)';
            nav.style.transition = 'transform 0.2s ease-out';
        } else {
            nav.style.transform = 'translateX(-100%)';
            nav.style.transition = 'transform 0.2s ease-out';
        }
    });


    // Toggle Menu Icon ========================================
    let toggleIcon:any|null = document.querySelector('.menuIcon');

    toggleIcon.addEventListener('click', () => {
        if (toggleIcon.className != 'menuIcon toggle') {
            toggleIcon.className += ' toggle';
            this.menu.hide=true;
        } else {
            toggleIcon.className = 'menuIcon';
            this.menu.hide=false;
        }
    });

    // eyes =============================================
let pupils: any = document.querySelectorAll(".pupil");

for (var i = 0; i < pupils.length; i++) {
    var offset = pupils[i].getBoundingClientRect();
    pupils[i]['centerX'] = offset.left + offset.width/2,
    pupils[i]['centerY'] = offset.bottom;
}

window.addEventListener('mousemove', goGoogly);
window.addEventListener('touchstart', goGoogly);
window.addEventListener('touchmove', goGoogly);

function goGoogly(e:any) {
  let mouseX;
  let mouseY;
  let pointerEvent = e;
  if (e.targetTouches && e.targetTouches[0]) {
    e.preventDefault();
      pointerEvent = e.targetTouches[0];
      mouseX = pointerEvent.pageX + window.pageXOffset;
      mouseY = pointerEvent.pageY + window.pageYOffset;
  } else {
      mouseX = e.clientX + window.pageXOffset,
      mouseY = e.clientY + window.pageYOffset;
  }
  for (var i = 0; i < pupils.length; i++) {
      pupils[i]['radians'] = Math.atan2(mouseX - pupils[i]['centerX'], mouseY - pupils[i]['centerY']),
      pupils[i]['degree'] = (pupils[i]['radians'] * (180 / Math.PI) * -1);
      pupils[i].style.transform = 'rotate('+ (pupils[i]['degree'] + 180) + 'deg)';
  }
}
  }
}
