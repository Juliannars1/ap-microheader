import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationMenuListService {
  private serviceUrl = '/assets/header/assets/mocks/application-menu.json';
  constructor(private http: HttpClient) {}

  getDataAplicationMenuList(): Observable<any> {
    return this.http.get<any>(this.serviceUrl);
  }
}
