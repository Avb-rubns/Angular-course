import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUsersRequest, User } from '../Models/dtos.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  readonly URLAPI = "https://localhost:44300"
  constructor(private client:HttpClient) { }

  GetUsers(){
    return this.client.get<Array<User>>(this.URLAPI +"/api/TestAngular/GetUsersList");
  }

  GetUserById(req: GetUsersRequest){
    return this.client.post<User>(this.URLAPI +"/api/TestAngular/GetUser", req)
  }


}
