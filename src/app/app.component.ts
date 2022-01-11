import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traderinsideme';
  constructor() { 
    
  }

  @HostListener('window:scroll', ['$event'])
  track(event) {
    localStorage.setItem('scrollY', event.srcElement.scrollingElement.scrollTop);
  }
  // @HostListener('window:load', ['$event'])
  // saveScroll(event) {
  //   console.log("works");
  //   document.body.scrollTop = +localStorage.getItem('scrollY');
  //   document.documentElement.scrollTop = +localStorage.getItem('scrollY');
  // }
}
