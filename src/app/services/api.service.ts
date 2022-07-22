import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected headers: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  protected token: string;
  
  constructor(protected http: HttpClient) { 

  this.token = sessionStorage.getItem('login') || '';



    
  }
}
