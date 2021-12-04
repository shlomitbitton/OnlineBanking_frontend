import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

 // user: string= '';
  constructor() { }

  ngOnInit(): void {
 // this.user = this.route.snapshot.params['user'];
  }

  getAllUserAccounts(){
    console.log("These are the user accounts");
  }
}
