import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string){
    // console.log('before ' + this.isUserLoggedIn());
    if ((username === 'david' || username === 'admin') && password === ''){
        sessionStorage.setItem('authenticaterUser',username);
        // console.log('after' + this.isUserLoggedIn());
        return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  isUserAdmin() {
    let user = sessionStorage.getItem('authenticaterUser');
    if(this.isUserLoggedIn() && user==('admin')){
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
