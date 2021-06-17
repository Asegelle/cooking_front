import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/webservices/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });

  }

}
