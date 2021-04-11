import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarViewComponent } from './navigation-bar-view.component';

describe('NavigationBarViewComponent', () => {
  let component: NavigationBarViewComponent;
  let fixture: ComponentFixture<NavigationBarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
