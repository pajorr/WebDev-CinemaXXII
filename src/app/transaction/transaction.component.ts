import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

@Input()
	TransactionId: any = [];
	MovieName: any = [];
	MovieTime: any = [];
	MoviePrice: any = [];

  constructor(private dataService: DataService) { }


  transaction(){
    this.dataService.getTransaction().subscribe();
    console.log('Transaction received');

    setTimeout(()=> this.getTransaction(), 1000)

    
}

  getTransaction(){
    for(let x=0; x<3; x++){
    this.TransactionId[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].id;
    this.MovieName[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].movie_name;
    this.MovieTime[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].time;
    this.MoviePrice[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].price;
  }
  }

  ngOnInit() {
  }

}
