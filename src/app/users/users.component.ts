import { Component, OnInit } from '@angular/core';
import { ColorService } from "../color.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  constructor(private colorService: ColorService) {
    
    
   }

  ngOnInit(): void {
  }

}
