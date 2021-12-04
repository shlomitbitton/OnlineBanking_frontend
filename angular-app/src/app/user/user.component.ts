import { Component, OnInit } from '@angular/core';
import {ICINBankingDataService} from '../service/data/icinbanking-data.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users = [];
  constructor(private icinbankingDataService : ICINBankingDataService) {
  }

  ngOnInit() {
   // this.icinbankingDataService.getUsers().subscribe(data => this.users = data);
  }


//    getUserList(){
//       console.log("Fetching users list");
//       this.icinbankingDataService.getUser()
//    }



}
