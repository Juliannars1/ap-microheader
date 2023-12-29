import { Component, NgModule, OnInit } from '@angular/core';

import { ApplicationMenuListService } from '../../services/application-menu-list.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AppSByCategory } from '../../models/AplicationCategory';

const serviceUrl = '/assets/header/assets/mocks/application-menu.json';

@Component({
  selector: 'app-application-menu',
  templateUrl: './application-menu.component.html',
  styleUrls: ['./application-menu.component.css'],
  //standalone: true,
  //imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
})
export class ApplicationMenuComponent implements OnInit {
  aplicationMenu: AppSByCategory[] = [];
  constructor(private MenuListService: ApplicationMenuListService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.MenuListService.getDataAplicationMenuList().subscribe((data) => {
      this.aplicationMenu = data.appsByCategory;
      console.log(this.aplicationMenu);
    });
  }
}
@NgModule({
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
  declarations: [ApplicationMenuComponent],
  exports: [ApplicationMenuComponent],
  providers: [
    ApplicationMenuListService, // Agrega el servicio a la lista de proveedores
  ],
})
export class ApplicationMenuModule {}
