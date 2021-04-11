import {Component, Input, OnInit} from '@angular/core';
import {NavigationBarView} from './navigation-bar-view.model';

@Component({
  selector: 'app-navigation-bar-view',
  templateUrl: './navigation-bar-view.component.html',
  styleUrls: ['./navigation-bar-view.component.scss']
})
export class NavigationBarViewComponent implements OnInit {
  @Input() data: NavigationBarView;

  constructor() {
    this.data = new NavigationBarView();
  }

  ngOnInit(): void {
  }

}
