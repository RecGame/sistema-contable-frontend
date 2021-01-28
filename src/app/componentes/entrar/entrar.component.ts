import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  formularioEntrar: FormGroup;

  constructor(private http: HttpClient,private formBuilder: FormBuilder) 
  {
    this.formularioEntrar = this.formBuilder.group(
    {
      usuario: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      contrasena: ['', Validators.required]
    });
   }

  ngOnInit()
  {
    
  }

  entrar(formulario)
  {
    console.log(formulario.value.usuario);
    console.log(formulario.value.contrasena);
    this.http.post<any>('http://localhost:80/sistema-contable/api.php/entrar', 
    {
       usuario: formulario.value.usuario,
       contrasena: formulario.value.contrasena  
    }).subscribe(data => {
        if(data != "Informacion incorrecta")
        {
          localStorage.setItem('token', data);
          alert(localStorage.getItem('token'));
        }
        else
        {
          alert(data);
        }
    })
  }

}
