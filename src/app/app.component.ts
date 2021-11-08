import { Component } from '@angular/core';
import { ColorService } from "./color.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User-app';
  subscription:any;
  isToggle = false;
  con = document.getElementById('main-container');

  constructor(private colorService: ColorService) {
    this.subscription =this.colorService.toggleSubject.subscribe(response => {
      if(response.value == false){
        document.getElementById('main-container')?.classList.add('blue');
      }else{
        document.getElementById('main-container')?.classList.remove('blue');
      }
    })
    
   }
}
