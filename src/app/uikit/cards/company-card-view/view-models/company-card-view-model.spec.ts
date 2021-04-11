import { CompanyCardViewModel } from './company-card-view-model';

describe('CompanyCardViewModel', () => {
  it('should create an instance', () => {
    expect(new CompanyCardViewModel({
      id: '000001',
      name: 'test name',
      location: 'test name'
    })).toBeTruthy();
  });
});
