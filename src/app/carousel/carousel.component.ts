import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
      config.interval = 7000;
      config.keyboard = true;
      config.pauseOnHover = false;
  }

  images = [
    {title: '', short: '', src: "./assets/MSImage1.jpg"},
    {title: '', short: '', src: "./assets/MSImage2.jpg"},
    // {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ];

  ngOnInit(): void {}

}
