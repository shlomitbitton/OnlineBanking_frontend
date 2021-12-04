import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from './user';



@Injectable({
  providedIn: 'root'
})
export class ICINBankingDataService {

  constructor( private http: HttpClient){
   }

//   executeTransactionList(){
//       this.http.get<any>('http://localhost:8080/allTransactions').subscribe(response => {
//       console.log(response)
//       });
//   }


  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8080/allUsers');
  }
}
