import { Component, OnInit } from '@angular/core';
import {CarouselItem} from './models/carousel-item/carousel-item.type';

@Component({
  selector: 'app-home-page-carousel',
  templateUrl: './home-page-carousel.component.html',
  styleUrls: ['./home-page-carousel.component.scss']
})

export class HomePageCarouselComponent implements OnInit {
  carouselItems: CarouselItem[];

  constructor()
  {
    this.carouselItems = [];
  }

  ngOnInit(): void {

    this.carouselItems = [
      {
        id: '01',
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet',
        buttonSubsections: [
          {
            id: '01',
            title: 'Option 1'
          },
          {
            id: '02',
            title: 'Option 2'
          },
        ]
      },
      {
        id: '02',
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet',
        buttonSubsections: [
          {
            id: '01',
            title: 'Option 1'
          },
        ]
      },
      {
        id: '03',
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet',
        buttonSubsections: [
          {
            id: '01',
            title: 'Option 1'
          },
          {
            id: '02',
            title: 'Option 2'
          },
          {
            id: '03',
            title: 'Option 3'
          },
        ]
      }
    ];
  }
}
