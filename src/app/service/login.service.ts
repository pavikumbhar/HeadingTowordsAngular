
import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  login(user: User): Promise<User> {
    return this.http
      .post("login", JSON.stringify(user), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
