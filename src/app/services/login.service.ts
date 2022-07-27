import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService{
  public url = environment.urlPruebasLocal;
  httpHeaders: any;


  constructor(private http: HttpClient) { 
    //onsole.log('Servicio HTTP:');
  }


  
  
  login( email :string, password: string){
    const body ={
      email,
      password,
    }
    
    return this.http.post(this.url+'login/signin',body,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    });
  };
  
  validateSession(token: string){
    return this.http.get(this.url+'login/signin',{
      headers : new HttpHeaders().set('Authorization',token ||''),
    });
  }
  


}
