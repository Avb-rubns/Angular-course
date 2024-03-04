import { CanActivateFn, Router } from '@angular/router';
import { User } from '../Models/dtos.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  let router = inject(Router)
  let user: User = new User()
  let usr = localStorage.getItem('usr')



  user = usr ? JSON.parse(usr):new User()
  if(usr){
    //router.navigate(['home/calculator']);
    return true;
  }else{
    router.navigate(['users']);
    return false;
  }
  //return usr ? true: false;
};
