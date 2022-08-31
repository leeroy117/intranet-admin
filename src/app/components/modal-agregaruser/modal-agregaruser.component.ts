import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-modal-agregaruser',
  templateUrl: './modal-agregaruser.component.html',
  styleUrls: ['./modal-agregaruser.component.scss']
})
export class ModalAgregaruserComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  




  registerForm = this.formBuilder.group({

    telefonos: this.formBuilder.array([])

  });

  get Telefonos(){
    return this.registerForm.get('telefonos') as FormArray;
  }

  agregarTelefono(){
    const telefonoformGroup = this.formBuilder.group({telefono: ''});
    this.Telefonos.push(telefonoformGroup);
    console.log("entro");
  }

  removerTelefono(indice: number){
    this.Telefonos.removeAt(indice);
  }

}
