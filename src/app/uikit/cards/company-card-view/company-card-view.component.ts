import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CompanyItem, emptyCompany} from './models/company-card-item.type';
import {CompanyCardViewModel} from './view-models/company-card-view-model';

@Component({
  selector: 'app-company-card-view',
  templateUrl: './company-card-view.component.html',
  styleUrls: ['./company-card-view.component.scss']
})

export class CompanyCardViewComponent implements OnInit {
  @Input() data: CompanyItem;
  company: CompanyCardViewModel;

  constructor(private router: Router) {
    this.data = emptyCompany();
    this.company = new CompanyCardViewModel(this.data);
  }

  ngOnInit(): void {
    if (this.data) {
      this.company = new CompanyCardViewModel(this.data);
    }
  }

  public onClick(event: any): void {
    event.stopPropagation();
  }

  public onClickBuyButton(event: any): void {
    event.stopPropagation();
    // todo:
  }
}
