import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // url to reach schedule methods in back-end
  private userUrl = 'http://localhost:8080/user';

  
  // --------------------------------------------------------------------------------
  // Constructor
  constructor(private http: HttpClient) { }




  // --------------------------------------------------------------------------------
  // Methods

  // ------------------------- get --------------------------
  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }






}
