import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Register } from './Register';
import { SignIn } from './SignIn';
import { MovieId } from './MovieId';
import { SeatId } from './SeatId'
import { Ticket } from './Ticket'
import { Response } from '@angular/http';


import 'rxjs/add/operator/map'; 

@Injectable()
export class DataService {

	returnCommentStatus:Object = [];
	//user
	response: any = {};
	token: any = {};
	userName: any = {};
	userEmail: any = {};
	userPhone: any = {};
	//user

	//movie
	movieResponse: any = [];
	timeResponse: any = [];
	seatResponse: any = [];
	transactionResponse: any = {};
	book: any = {};
	bookArg: any =[];
	//movie

	//nav
	visible: boolean;
	//nav
	
	constructor(private http:HttpClient) {
	 }
	//book
		getMovieData(){
			let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
			return this.http.get('https://api.cinemaxxii.me/api/theatres', {headers:headers}).map(res=>{
				console.log(res);

				this.movieResponse = res;
				localStorage.setItem('movieResponse', JSON.stringify(this.movieResponse));

				//this.movieName = res.["0"].movie_name;
				//localStorage.setItem('moviename', this.movieName);
			});
		}

	//book
 	 getMovieTime(mov: MovieId){
 	 		let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
    		return this.http.get('https://api.cinemaxxii.me/api/times/'+ mov.movieId, {headers:headers}).map(res=>{
    			console.log(res);

    			this.timeResponse = res;
    			localStorage.setItem('timeResponse', JSON.stringify(this.timeResponse));

    		});
 	 }
 	 //book
 	 getMovieSeat(seat: SeatId){
 	 		let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
    		return this.http.get('https://api.cinemaxxii.me/api/seats/'+ seat.seatId, {headers:headers}).map(res=>{
    			console.log(res);

    			this.seatResponse = res;
    			localStorage.setItem('seatResponse', JSON.stringify(this.seatResponse));

    		});
 	 }

 	 //get transaction
 	 getTransaction(){
 	 	let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
 	 	return this.http.get('https://api.cinemaxxii.me/api/utransactions/' + JSON.parse(localStorage.getItem('response')).data.user["0"].id, {headers:headers}).map(res=>{
 	 		console.log(res);

 	 		this.transactionResponse = res;
 	 		localStorage.setItem('transactionResponse', JSON.stringify(this.transactionResponse))


 	 	});
 	 }

//get the final data for transaction, not to post to ticket table (book)
 	 bookTicket(){
 	 	//https://api.cinemaxxii.me/api/sticket/seatid
 	 	let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
 	 	
    		return this.http.get('https://api.cinemaxxii.me/api/sticket/'+ JSON.parse(localStorage.getItem('seatChosen')), {headers:headers}).map(res=>{
    			console.log(res);

    			this.book = res;
    			localStorage.setItem('ticketResponse', JSON.stringify(this.book));

    			let bookuser = JSON.parse(localStorage.getItem('response')).data.user["0"].id;
    			let bookticket = JSON.parse(localStorage.getItem('ticketResponse')).ticket.id;
    			this.bookArg = {"user_id":bookuser, "ticket_id":bookticket};
    			localStorage.setItem('bookFinal', JSON.stringify(this.bookArg));


    		});


 	 }
 	 //book
 	 postTransaction(){
 	 	let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
 	 	let url = 'https://api.cinemaxxii.me/api/transactions'

 	 		return this.http.post(url, JSON.parse(localStorage.getItem('bookFinal')), {headers:headers}).map(res=>{
 	 			console.log(res);
 	 		});
 	 }
 	 //book
 	 	postTicket(ticket: Ticket){
 	 		let headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token});
 	 		let url = 'https://api.cinemaxxii.me/api/tickets';
			return this.http.post(url, ticket, {headers:headers}).map(res=> {
				console.log(res);

				if(res == "Failed, Seat is already booked"){
					localStorage.setItem('seatStatus', 'taken')
				}
				else{
				localStorage.setItem('seatStatus', 'free');}
			});
 	 	}
		//signup
		postUser(register:Register){
			let url = 'https://api.cinemaxxii.me/api/register';
			return this.http.post(url, register).map(res=>res);

		}
		//login
		postSignIn(signin:SignIn){

			//let headers = new Headers();
			//headers.append('Content-Type', 'application/json');
			let url = 'https://api.cinemaxxii.me/api/login';
			return this.http.post(url, signin).map(res=> {
			console.log(res);

			this.response = res;
			localStorage.setItem('response', JSON.stringify(this.response));
			this.token = JSON.parse(localStorage.getItem('response')).data.token;
			this.userName = JSON.parse(localStorage.getItem('response')).data.user["0"].name;
			this.userEmail = JSON.parse(localStorage.getItem('response')).data.user["0"].email;
			this.userPhone = JSON.parse(localStorage.getItem('response')).data.user["0"].phone;

			localStorage.setItem('username',this.userName);
			localStorage.setItem('useremail',this.userEmail);
			localStorage.setItem('userphone',this.userPhone);
			//console.log(localStorage['token']);

		});


	}

		 LogOut(){
		 	this.token=null;
		 	localStorage.removeItem('token');

		 }

	
}
