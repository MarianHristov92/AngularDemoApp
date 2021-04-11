import {Links} from '../../../http';

export class ViewModel {
  private _id = '65a75476-f3f8-45a5-80d4-93de29ab3d87';
  private _links: Links = {
    self: '',
    ref: ''
  };

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get links(): Links {
    return this._links;
  }

  set links(value: Links) {
    this._links = value;
  }
}
