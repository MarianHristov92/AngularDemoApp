import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageCompanyListComponent } from './home-page-company-list.component';

describe('HomePageCompanyListComponent', () => {
  let component: HomePageCompanyListComponent;
  let fixture: ComponentFixture<HomePageCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCompanyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
