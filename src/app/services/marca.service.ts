import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  public url = environment.urlPruebasLocal;
  constructor(private http: HttpClient) { }


  getMarca(){
    
    return this.http.get(this.url+'api/v1/marcas',{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    });
  
  };


  postMarca( marca :string, descripcion: string){
    const body ={
      marca,
      descripcion,
    }

     return this.http.post(this.url+'api/v1/marcas/registrarMarca',body,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    });
 };


}
