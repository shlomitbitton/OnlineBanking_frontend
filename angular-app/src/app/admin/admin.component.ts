import { Component, OnInit } from '@angular/core';
import {ICINBankingDataService} from '../service/data/icinbanking-data.service';
import {IUser} from '../service/data/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls:  ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
//     file!: File; // Variable to store file
    public users: IUser[] =[];

    constructor( private icinbankingDataService : ICINBankingDataService) {

    }

   ngOnInit() {
       this.icinbankingDataService.getUsers().subscribe(data => this.users = data);
   }




}
