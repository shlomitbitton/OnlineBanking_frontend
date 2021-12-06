import { Component, OnInit } from '@angular/core';
import {ICINBankingDataService} from '../service/data/icinbanking-data.service';
import {IUserAccounts} from '../service/data/userAccounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public userAccounts: IUserAccounts[] = [];

  constructor(private icinbankingDataService : ICINBankingDataService) { }

  ngOnInit() {
       this.icinbankingDataService.getUserAccounts(1).subscribe(data => this.userAccounts = data);
   }
}
