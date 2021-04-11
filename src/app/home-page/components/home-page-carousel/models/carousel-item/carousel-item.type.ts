import {CarouselItemSubsection} from '../carousel-item-subsection/carousel-item-subsection.type';

export type CarouselItem = {
  id: string,
  title: string,
  subtitle: string,
  buttonSubsections: Array<CarouselItemSubsection>
};

export function emptyItem(): CarouselItem {
  return {
    id: '',
    title: '',
    subtitle: '',
    buttonSubsections: []
  };
}
