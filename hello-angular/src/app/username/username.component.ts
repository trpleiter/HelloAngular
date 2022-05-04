import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  allowSubmitUsername: boolean = false;
  usernameSubmitStatus: string = 'No username was submitted';
  username: string = '';

  constructor() {}

  ngOnInit(): void {}
  onSubmitUsername() {
    this.usernameSubmitStatus =
      'The username ' + this.username + ' was submitted!';
  }
}
