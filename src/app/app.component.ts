import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sistema-contable';

  constructor(private http: Http,private router: Router,) { }

  ngOnInit(): void {
  }

  navegarInicio()
  {
    this.router.navigate(['principal']);
  }

}
