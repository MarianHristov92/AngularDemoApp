import {CompanyItem} from '../models/company-card-item.type';
import {ViewModel} from '../../../view-model/view-model';

export class CompanyCardViewModel extends ViewModel {
  private _companyItem: CompanyItem;

  constructor(companyItem: CompanyItem) {
    super();
    this._companyItem = {
      id: companyItem.id,
      name: companyItem.name,
      location: companyItem.location
    };
  }

  get name(): string {
    return this._companyItem.name;
  }

  get location(): string {
    return this._companyItem.location;
  }
}
