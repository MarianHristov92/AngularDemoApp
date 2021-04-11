export type CompanyItem = {
  id: string,
  name: string,
  location: string
};

export function emptyCompany(): CompanyItem {
  return {
    id: '',
    name: '',
    location: ''
  };
}
