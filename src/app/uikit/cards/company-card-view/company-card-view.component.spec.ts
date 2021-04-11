import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCardViewComponent } from './company-card-view.component';

describe('CompanyCardViewComponent', () => {
  let component: CompanyCardViewComponent;
  let fixture: ComponentFixture<CompanyCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
