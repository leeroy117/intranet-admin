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

  username: string='';
  password: string='';
  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const response = this.loginService.login(this.username, this.password)
  
        

    response.subscribe(
      (result: any ) =>{
        if(result.token != null){
          console.log("Que tiene:"+result);
          sessionStorage.setItem('login',result.token);
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
