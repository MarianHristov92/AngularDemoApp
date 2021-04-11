import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomePageCarouselViewModel} from '../../view-models/home-page-carousel-view-model';
import {CarouselItem, emptyItem} from '../../models/carousel-item/carousel-item.type';

@Component({
  selector: 'app-home-page-carousel-item',
  templateUrl: './home-page-carousel-item.component.html',
  styleUrls: ['./home-page-carousel-item.component.scss']
})

export class HomePageCarouselItemComponent implements OnInit {
  @Input() data: CarouselItem;
  carouselItem: HomePageCarouselViewModel;

  constructor(private router: Router) {
    this.data = emptyItem();
    this.carouselItem = new HomePageCarouselViewModel(this.data);
  }

  ngOnInit(): void {
    if (this.data) {
      this.carouselItem = new HomePageCarouselViewModel(this.data);
    }
  }
}
