import {ViewModel} from '../../../../uikit/view-model/view-model';
import {HomePageFeatureItemModel} from '../models/home-page-feature-item-model/home-page-feature-item';

export class HomePageFeatureListViewModel extends ViewModel {
  private companyItem: HomePageFeatureItemModel;

  constructor(featureItem: HomePageFeatureItemModel) {
    super();
    this.companyItem = {
      id: featureItem.id,
      title: featureItem.title,
      paragraph: featureItem.paragraph,
      buttonDescription: featureItem.buttonDescription
    };
  }

  get title(): string {
    return this.companyItem.title;
  }

  get paragraph(): string {
    return this.companyItem.paragraph;
  }

  get buttonDescription(): string {
    return this.companyItem.buttonDescription;
  }
}
