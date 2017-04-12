import { Injectable } from '@angular/core';
import { User } from './user'; 
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
private usersUrl = 'api/users';
private externalUrl = 'http://localhost:8080/tweets/mobile/apple';
private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http : Http) { }
getUsers() : Promise<User[]> {
	return this.http.get(this.usersUrl)
			.toPromise()
			.then(response => response.json().data as User[])
			.catch(this.handleError);
 }

create(name : string) : Promise<User> {
return this.http
	.post(this.usersUrl,JSON.stringify({userId:name}),{headers:this.headers}).toPromise().then(res => res.json().data as User)
.catch(this.handleError);
}

private handleError(error:any): Promise<any> {
console.error('an error occured',error);
return Promise.reject(error.message || error);
}


}

