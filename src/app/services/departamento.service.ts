import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  public url = environment.urlPruebasLocal;
  constructor(private http: HttpClient) { }

  getDepartamento(){
    
    return this.http.get(this.url+'api/v1/departamento',{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    });
  
  };


}
