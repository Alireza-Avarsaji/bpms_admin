import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CustomLocalStorage } from 'src/app/core/sorage/custom-local-storage';
import { tokenModel } from '../model/token.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  authUrl = 'https://bpms2.darkube.app'

  constructor(http: HttpClient, private handler: HttpHandler, private storage: CustomLocalStorage) { }

  signIn(userName: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    const data = `grant_type=password&client_id=mobile_client_customer&client_secret=secret&UserName=${userName}&Password=${password}`;
    const http = new HttpClient(this.handler);
    return http.post<tokenModel>(`${this.authUrl}/connect/token`, data, httpOptions).pipe(
      map(result => {
        if (result.access_token) {
          this.storage.setItem('access_token', result.access_token);
          this.storage.setItem('refresh_token', result.refresh_token);
        }
        return result;
      })
    );
  }
}
