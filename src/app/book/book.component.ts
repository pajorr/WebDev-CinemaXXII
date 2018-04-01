import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { MovieId } from './../MovieId';
import { SeatId } from './../SeatId';
import { Ticket } from './../Ticket';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  movie: any = [];
  time: any = [];
  seat: any = [];
  seatAlert: any = "";

  constructor(private http: HttpClient, private dataService: DataService) { }

  @Input() mov:MovieId;
  seatVar:SeatId;
  ticketVar:Ticket;
  ticketIdVar:Ticket;

    ngOnInit() {
  	  this.dataService.getMovieData()
        .subscribe()


  }

  getMovies(){
    for (var x = 0; x < 2; x++){
    this.movie[x]=JSON.parse(localStorage.getItem('movieResponse'))[x].movie_name;
     }
  }

  getTime(tid: any){
    this.mov = new MovieId();
    this.mov.movieId = JSON.parse(localStorage.getItem('movieResponse'))[tid].id;
    this.dataService.getMovieTime(this.mov).subscribe();
   
  }

  setTime(){
    for(var x = 0; x<2; x++){
      this.time[x]=JSON.parse(localStorage.getItem('timeResponse')).times[x].time;
    }
  }

  getSeat(mid: any){
    this.seatVar = new SeatId();
    this.seatVar.seatId = JSON.parse(localStorage.getItem('timeResponse')).times[mid].id;
    this.dataService.getMovieSeat(this.seatVar).subscribe();

  }

  setSeat(){
    for(var x = 0; x<3; x++){
      this.seat[x]=JSON.parse(localStorage.getItem('seatResponse')).seats[x].position;
    }
  }

  submitTicket(tickid: any){
    this.ticketVar = new Ticket();
    this.ticketVar.seats_id= JSON.parse(localStorage.getItem('seatResponse')).seats[tickid].id
    localStorage.setItem('seatChosen', JSON.stringify(this.ticketVar.seats_id));
    this.dataService.postTicket(this.ticketVar).subscribe()
    
    if(localStorage.getItem('seatStatus') == 'taken'){
      this.seatAlert = "Seat taken, please choose another one.";
      console.log(this.seatAlert);
    }else{
      this.seatAlert = "";
    }
  }

  book(){
      this.dataService.bookTicket().subscribe();

  }

  done(){
      this.dataService.postTransaction().subscribe();
  }

}
