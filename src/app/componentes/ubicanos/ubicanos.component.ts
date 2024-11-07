import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrl: './ubicanos.component.css'
})
export class UbicanosComponent {
  formularioForm;
  datos_formulario:any;
  resultado:any;
  padding:any;

  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mensaje:''
    })

  }
  ngOnInit(){
    console.log('A continuacion vienen datos del formulario');
    console.log(this.datos_formulario);
  }

  enviarDatos(){
    console.log("Se ha usado esta funcion");
    this.datos_formulario = this.formularioForm.value;
    console.log(this.datos_formulario)
  }

  aparecer(){
    if  (!this.datos_formulario) {
      
    }else{
      console.log("Formulario lleno")
      this.padding = '10px'
      this.resultado = '20%';
    }
    

    return this.resultado;
  }
}
