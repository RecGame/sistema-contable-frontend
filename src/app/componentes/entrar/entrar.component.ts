import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.post<any>('http://localhost:80/sistema-contable/index.php', 
    {
       usuario: 'Jahaziel',
       contrasena: '123457'   
    }).subscribe(data => {
        alert(JSON.stringify(data));
    })
  }

}
