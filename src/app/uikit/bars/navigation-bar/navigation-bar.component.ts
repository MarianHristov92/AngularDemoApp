import {Component, Input, OnInit} from '@angular/core';
import {NavigationBarData} from './navigation-data.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() data: NavigationBarData;

  constructor() {
    this.data = new NavigationBarData();
  }

  ngOnInit(): void {
  }
}
