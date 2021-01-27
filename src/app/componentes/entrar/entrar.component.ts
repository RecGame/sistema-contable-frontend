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

  constructor(private http: HttpClient,private formBuilder: FormBuilder) {
    this.formularioEntrar = this.formBuilder.group({
      usuario: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      contrasena: ['', Validators.required]
    });
   }

  ngOnInit(){
    this.http.post<any>('http://localhost:80/sistema-contable/api.php/entrar', 
    {
       usuario: 'Jahaziel',
       contrasena: '123457'   
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

  entrar(angForm1)
  {
    console.log(angForm1.value.usuario);
    console.log(angForm1.value.contrasena);
  }

}
