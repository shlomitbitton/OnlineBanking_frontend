import { Component, OnInit } from '@angular/core';
import {TransactionListDataService} from '../service/data/transaction-list-data.service';

@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit {

  constructor(private transactionListDataService : TransactionListDataService) { }

  ngOnInit(): void {
  }

  getTransactionsList(){
   // console.log("getting transactions list");
    console.log(this.transactionListDataService.executeTransactionList());
  }

}
