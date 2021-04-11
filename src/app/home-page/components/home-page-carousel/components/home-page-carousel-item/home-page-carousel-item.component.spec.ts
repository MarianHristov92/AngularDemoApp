import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCarouselItemComponent } from './home-page-carousel-item.component';

describe('HomePageCarouselItemComponent', () => {
  let component: HomePageCarouselItemComponent;
  let fixture: ComponentFixture<HomePageCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCarouselItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
