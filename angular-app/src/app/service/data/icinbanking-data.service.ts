import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from './user';
import {IUserAccounts} from './userAccounts';
import {IUserTransactions} from './userTransactions';


@Injectable({
  providedIn: 'root'
})
export class ICINBankingDataService {

    constructor( private http: HttpClient){
     }



  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://172.31.12.234:8080/allUsers');
  }

  getUserAccounts(userKey: number): Observable<IUserAccounts[]>{
  return this.http.get<IUserAccounts[]>('http://172.31.12.234:8080/users/1/accounts')}

   getUserTransactions(toAccount: number, fromAccount: number): Observable<IUserTransactions[]>{
    return this.http.get<IUserTransactions[]>('http://172.31.12.234:8080/allTransactions?toAccount=1&fromAccount=2')}
}
