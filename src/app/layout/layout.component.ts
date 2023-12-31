import { Component } from '@angular/core';
import { MenuService } from '../core/service/menu.service';
import { Router } from '@angular/router';
import { IMenu } from '../core/interface/menu.model';
import { CustomLocalStorage } from '../core/sorage/custom-local-storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  menuItems = this.menuService.getAllMenuItems();

  constructor(private menuService: MenuService, private router: Router, private repo: CustomLocalStorage) {}

  navigate(item: IMenu, childItem: IMenu) {
    this.router?.navigate([item.route, childItem.route] , {queryParams: childItem.qparam} );
  }

  logout() {
    this.repo.remove('access_token');
    this.router.navigate(['/sign-in']);
  }



}
