import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './../data.service';
import { Register } from './../Register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [DataService]
})
export class SignupComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() register:Register;
  responseStatus:Object= [];
  status:boolean;

  submitPost()
    {        
        this.dataService.postUser(this.register).subscribe(
           data => console.log(this.responseStatus = data),
           err => console.log(err),
           () => console.log('Request Completed')
        ); 
        this.status = true;       
    }

  ngOnInit() {
  	   this.register = new Register();


  }

}
