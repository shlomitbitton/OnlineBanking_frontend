import { Component, OnInit } from '@angular/core';
import {ICINBankingDataService} from '../service/data/icinbanking-data.service';
import {IUserTransactions} from '../service/data/userTransactions';




@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit {

  public transactions: IUserTransactions[] = [];
  constructor(private icinbankingDataService : ICINBankingDataService) { }

   ngOnInit() {
          this.icinbankingDataService.getUserTransactions(1,1).subscribe(data => this.transactions = data);
   }



}
