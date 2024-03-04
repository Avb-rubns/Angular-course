import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(private toast:ToastrService){}

  sum1: string = "0"
  sum2: string = "0"
  result: string = "";
  IsSum : boolean = false;
  StyleSum = 'positive'


  users = [
    {id:1, name:"usr1",lastname:"last1"},
    {id:2, name:"usr2",lastname:"last2"},
    {id:3, name:"usr3",lastname:"last3"},
    {id:4, name:"usr4",lastname:"last4"},
    {id:5, name:"usr5",lastname:"last5"},
  ]

  ngOninit(){
    this.toast.success("Esta es la calculadora")
  }

  suma(){
    

    if (!isNaN(Number.parseInt(this.sum1)) && !isNaN(Number.parseInt(this.sum2))) {
        let r = Number.parseInt(this.sum1) + Number.parseInt(this.sum2)
        this.result = r.toString()
        this.IsSum = true;
    } else {
        this.result = "Uno de los valores no es un número"
        this.IsSum = false;
    }

  }
  validate(){
    if(this.IsSum){
      return  Number.parseInt(this.result) < 0 
                      ? 'negative' : 'positive'

    }else{
      return 'negative'
    }
  }
  show(){
    console.log(this.users)
  }  

}
