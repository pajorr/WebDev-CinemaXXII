import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './../data.service';
import { SignIn } from './../SignIn'
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() signin:SignIn;
  responseStatus:Object= [];
  status:boolean;


    submitLogin(){

      this.dataService.postSignIn(this.signin).subscribe(
             () => console.log('Login Completed')
          ); 
          this.status = true;
          setTimeout(()=> window.location.href = "", 2000);
    }



    ngOnInit() {

      this.signin = new SignIn();
    
    }


}
