import { Component, OnInit } from '@angular/core';
import { ColorService } from "../color.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  colorToggle=true;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
  }
  onColorToggle(){
    this.colorToggle=!this.colorToggle;
    this.colorService.toggleSubject.next({key:'color',value:this.colorToggle});
  }
}
