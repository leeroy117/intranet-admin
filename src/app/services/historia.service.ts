import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  public url = environment.urlPruebasLocal;
  httpHeaders: any;

  constructor(private http: HttpClient) { }
  



  getHistoria(){
    
    return this.http.get(this.url+'api/v1/historia',{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    });
  
  };




}