export class NavigationBarItem {
  link: string;
  text: string;
  icon: string;

  constructor(link: string, text: string, icon: string) {
    this.link = link;
    this.text = text;
    this.icon = icon;
  }
}
