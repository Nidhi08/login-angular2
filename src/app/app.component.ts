import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  
selector: 'app-root',
  
templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
users : User[];

constructor(private userService : UserService) {}

getUsers() : void {
this.userService.getUsers().then(users => this.users = users);
}

add(name:string):void {
name=name.trim();
if(!name) {return; }
this.userService.create(name)
.then(user => {this.users.push(user);});
}

ngOnInit() : void {
this.getUsers();
}
}

