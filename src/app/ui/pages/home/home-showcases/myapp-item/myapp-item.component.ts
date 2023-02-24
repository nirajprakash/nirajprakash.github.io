import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UiUtilsColor } from 'src/app/ui/utils/color.utils';

@Component({
  selector: 'app-myapp-item',
  templateUrl: './myapp-item.component.html',
  styleUrls: ['./myapp-item.component.scss']
})
export class MyappItemComponent implements OnInit {

  
  
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

  @Input('color') set color(data: string | undefined) {
    if (data) {
      this._mColor = data 
    }
  }
  
  _mAppUrl: string  = ""
  _mName: string = ""
  _mImage?: string
  _mColor: string = '#FFFFFF';

  constructor(public el: ElementRef) { }


  ngOnInit(): void {
    this.bindColor();
  }

  bindColor() {
    var element = this.el.nativeElement
    element.style.setProperty('--app-primary', this._mColor);
    element.style.setProperty('--app-primary--rgb', UiUtilsColor.hexToRgb( this._mColor));
    
    // element.style.setProperty('--app-secondary', this._mColorSecondary);
    // element.style.setProperty('--app-secondary--rgb', UiUtilsColor.hexToRgb( this._mColorSecondary));
  }

}
