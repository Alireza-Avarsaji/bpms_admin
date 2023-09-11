import { Injectable } from '@angular/core';
import { IMenu } from '../interface/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  menuItems: IMenu[] = [
    {
      name: 'لیست سوالات',
      icon: 'playlist_add',
      route: 'questions',
      type: 'parent',
      qparam: {
        page: 1
      }
    },
    {
      name: 'سوال جدید',
      icon: 'live_help',
      route: 'questions/create',
      type: 'parent'
    },
    {
      name: 'فرم ها',
      icon: 'description',
      route: 'forms',
      type: 'parent',
      qparam: {
        page: 1
      }
    }
  ];


  getAllMenuItems() {
    return this.menuItems;
  }

}
