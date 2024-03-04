import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DTOsService {

  constructor() { }
}

export class User{
  id:number = 0 
  nombre: string = ""
  apellido: string = ""
}

export class GetUsersRequest{
  id:number = 0 
  userName: string = ""
}
