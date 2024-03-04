import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../../../Services/api.service';
import { GetUsersRequest, User } from '../../../Models/dtos.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  UserReq: GetUsersRequest = new GetUsersRequest()
  Users: Array<User> = Array<User>();
  User : User = new User()
  constructor(private toaster:ToastrService
    ,private apiService:APIService){}

  ngOnInit(){
    this.apiService.GetUsers().subscribe({
      next: data =>{
        this.Users = data.length > 0 ? data: Array<User>();
      },
      error: err => {
        this.toaster.error("No se pudo conectar a la API")
        console.log(err)
      }
    });
  }

  SendUser(){
    this.apiService.GetUserById(this.UserReq).subscribe({
      next: data =>{
        this.Users.push(data)
        let usr = JSON.stringify(data)
        localStorage.setItem('usr',usr)
        localStorage.setItem('usrB64',btoa(usr))
        this.toaster.success("Usuario almacenado")
        console.log(localStorage.getItem('usr'))
      },
      error: err => {
        this.toaster.error("No se pudo conectar a la API")
        console.log(err)
      }
    })
  }

}
