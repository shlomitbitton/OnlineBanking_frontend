import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionListDataService {

  constructor(private http: HttpClient) { }

  executeTransactionList(){
    console.log("executing transactions list from back end");
    return this.http.get('http://localhost:8080/allTransactions');
  }
}
