import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  Swal  from 'sweetalert2';
import { LoginService } from '../services/login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';
  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const response = this.loginService.login(this.email, this.password)

    console.log(response);
    
  
    response.subscribe(
      (result: any ) =>{
        console.log(result);

        let data = result.data;
        
        if(data.token != null){
          console.log("Que tiene:"+result);
          sessionStorage.setItem('login',data.token);
          this.router.navigate(['panel']).then(()=> {
            window.location.reload();
          });
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesion',
          text: 'El usuario o contraseño son incorrectos',
          confirmButtonText: 'Aceptar'
        });
      }
    );  
  }

}
