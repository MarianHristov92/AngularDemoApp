import {CarouselItem} from '../models/carousel-item/carousel-item.type';
import {CarouselItemSubsection} from '../models/carousel-item-subsection/carousel-item-subsection.type';
import {ViewModel} from '../../../../uikit/view-model/view-model';

export class HomePageCarouselViewModel extends ViewModel {
  private _carouselItem: CarouselItem;

  constructor(carouselItem: CarouselItem) {
    super();
    this._carouselItem = {
      id: carouselItem.id,
      title: carouselItem.title,
      subtitle: carouselItem.subtitle,
      buttonSubsections: carouselItem.buttonSubsections
    };
  }

  get title(): string {
    return this._carouselItem.title;
  }

  get subtitle(): string {
    return this._carouselItem.subtitle;
  }

  get buttonSubsections(): Array<CarouselItemSubsection> {
    return this._carouselItem.buttonSubsections;
  }

}
