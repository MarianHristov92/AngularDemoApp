import {NavigationBarItem} from './navigation-bar-item/navigation-bar-item.model';
import {NavigationBarView} from './navigation-bar-view/navigation-bar-view.model';

export class NavigationBarData {
  public logo: NavigationBarItem;
  public leftView: NavigationBarView;
  public middleView: NavigationBarView;
  public rightView: NavigationBarView;

  constructor() {
    this.logo = new NavigationBarItem('', '', '');
    this.leftView = new NavigationBarView();
    this.middleView = new NavigationBarView();
    this.rightView = new NavigationBarView();
  }
}


