import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  constructor(private toast:ToastrService){}

  ngOnInit():void{
    this.toast.success("holi XD ...")
  }
}
