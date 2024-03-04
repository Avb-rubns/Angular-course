import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Pages/home/index.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { CalculatorComponent } from './Pages/home/calculator/calculator.component';
import { UsersComponent } from './Pages/home/users/users.component';
import { authGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'home', children:[
    {path: 'dashboard', component:IndexComponent},
    {path: 'calculator', component:CalculatorComponent, canActivate:[authGuard]}

  ]},
  {path: 'config', children:[
    {path:'settings', component:SettingComponent}
  ]},
  {path:'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
