import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomePageFeatureListViewModel} from '../../view-models/home-page-feature-list-view-model';
import {HomePageFeatureItemModel, emptyFeature } from '../../models/home-page-feature-item-model/home-page-feature-item';

@Component({
  selector: 'app-home-page-feature-list-item',
  templateUrl: './home-page-feature-list-item.component.html',
  styleUrls: ['./home-page-feature-list-item.component.scss']
})
export class HomePageFeatureListItemComponent implements OnInit {
  @Input() data: HomePageFeatureItemModel | undefined;
  feature: HomePageFeatureListViewModel | undefined;

  constructor(private router: Router) {
    this.data = emptyFeature();
    this.feature = new HomePageFeatureListViewModel(this.data);
  }

  ngOnInit(): void {
    if (this.data) {
      this.feature = new HomePageFeatureListViewModel(this.data);
    }
  }

  onClick(event: any): void {

  }

}
