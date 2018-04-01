import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private dataService: DataService) { }

  @Input() username: any = {} //needed to pass
  useremail: any = {}
  userphone: any = {}

  ngOnInit() {
  	this.username = localStorage.getItem('username');
  	this.useremail = localStorage.getItem('useremail');
  	this.userphone = localStorage.getItem('userphone');

  }

}
