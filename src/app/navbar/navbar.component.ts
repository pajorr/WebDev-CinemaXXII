import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  	this.isLogin = JSON.parse(localStorage.getItem('response')).data.token ? true : false;
 
  }

  logout(){
  	window.location.href="/home";
  	localStorage.clear();
  }

}
