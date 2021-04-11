import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFeatureListItemComponent } from './home-page-feature-list-item.component';

describe('HomePageFeatureListItemComponent', () => {
  let component: HomePageFeatureListItemComponent;
  let fixture: ComponentFixture<HomePageFeatureListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageFeatureListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageFeatureListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
