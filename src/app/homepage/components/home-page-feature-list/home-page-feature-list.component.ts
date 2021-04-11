import { Component, OnInit } from '@angular/core';
import {HomePageFeatureItemModel} from '../home-page-feature-list/models/home-page-feature-item-model/home-page-feature-item';

@Component({
  selector: 'app-home-page-feature-list',
  templateUrl: './home-page-feature-list.component.html',
  styleUrls: [
    './home-page-feature-list.component.scss',
    '../../page/home-page/home-page.component.scss'
  ]
})
export class HomePageFeatureListComponent implements OnInit {
  homePageFeatureItems: HomePageFeatureItemModel[];

  constructor()
  {
    this.homePageFeatureItems = [];
  }

  ngOnInit(): void {

    this.homePageFeatureItems = [
      {
        id: '01',
        title: 'Page 01',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
        buttonDescription: 'Lorem ipsum'
      },
      {
        id: '02',
        title: 'Page 02',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
        buttonDescription: 'Lorem ipsum'
      },
      {
        id: '03',
        title: 'Page 03',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
        buttonDescription: 'Lorem ipsum'
      }
    ];
  }

}
