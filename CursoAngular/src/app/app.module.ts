import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Pages/home/index.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CalculatorComponent } from './Pages/home/calculator/calculator.component';
import { DTOsService } from './Models/dtos.service';
import { APIService } from './Services/api.service';
import { UsersComponent } from './Pages/home/users/users.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SettingComponent,
    NavBarComponent,
    CalculatorComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar: true,
      positionClass:"toast-top-right"
    }),
    
  ],
  providers: [DTOsService,
    APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
