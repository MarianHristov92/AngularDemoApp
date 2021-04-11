import {Component, Input, OnInit} from '@angular/core';
import {NavigationBarItem} from './navigation-bar-item.model';

@Component({
  selector: 'app-navigation-bar-item',
  templateUrl: './navigation-bar-item.component.html',
  styleUrls: ['./navigation-bar-item.component.scss']
})
export class NavigationBarItemComponent implements OnInit {
  @Input() item: NavigationBarItem = new NavigationBarItem('', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
