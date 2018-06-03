import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserlogedIn;

  constructor() { 
    this.isUserlogedIn=false;
  }

  

}
