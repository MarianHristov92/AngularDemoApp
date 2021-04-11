import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFeatureListComponent } from './home-page-feature-list.component';

describe('HomePageFeatureListComponent', () => {
  let component: HomePageFeatureListComponent;
  let fixture: ComponentFixture<HomePageFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageFeatureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
