import { Component, OnInit } from '@angular/core';
import {CompanyItem} from '../../../uikit/cards/company-card-view/models/company-card-item.type';

@Component({
  selector: 'app-home-page-company-list',
  templateUrl: './home-page-company-list.component.html',
  styleUrls: [
    './home-page-company-list.component.scss',
    '../../page/home-page/home-page.component.scss'
  ]
})
export class HomePageCompanyListComponent implements OnInit {
  companyList: CompanyItem[];

  constructor()
  {
    this.companyList = [];
  }

  ngOnInit(): void {

    // TODO: FIX THE CALL WHEN WE HAVE BACKEND TO REMOVE CIRCULAR DEPENDENCY

    this.companyList = [
      {
        id: '01',
        name: 'Company 1',
        location: 'Cologne, The Netherlands'
      },
      {
        id: '02',
        name: 'Company 2',
        location: 'Monchengladbach, Germany'
      },
      {
        id: '03',
        name: 'Company 3',
        location: 'Dusseldorf, Germany'
      },
      {
        id: '04',
        name: 'Company 4',
        location: 'Cologne, Germany'
      }
    ];
  }
}
