import { HomePageCarouselViewModel } from './home-page-carousel-view-model';

describe('HomePageCarouselViewModel', () => {
  it('should create an instance', () => {
    expect(new HomePageCarouselViewModel({
      id: '000001',
      title: 'test name',
      subtitle: 'test name',
      buttonSubsections: []
    })).toBeTruthy();
  });
});
