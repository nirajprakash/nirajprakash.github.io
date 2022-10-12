import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent implements OnInit {

  @Input('name') set name(data: string){
    if(data){
      this._mName = data;
    }
  };

  // @Input() parts: String[] = [];

  @Input('link') set link(data: string) {
    if (data) {
      this._mAppUrl = data

      // this._mMeta = data.meta      
    }
  }

  
  @Input('image') set image(data: string) {
    if (data) {
      this._mImage = data

      // this._mMeta = data.meta      
    }
  }

  @Input('color') set color(data: string) {
    if (data) {
      this._mColor = data 
    }
  }
  
  _mAppUrl: string  = ""
  _mName: string = ""
  _mImage?: string
  _mColor?: string 

  constructor() { }

  ngOnInit(): void {
  }
}
