import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {
  public url = environment.urlPruebasLocal;
  constructor(private http: HttpClient) { }


  getDirectorio(){
    
    return this.http.get(this.url+'api/v1/directorio',{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    });
  
  };
}
