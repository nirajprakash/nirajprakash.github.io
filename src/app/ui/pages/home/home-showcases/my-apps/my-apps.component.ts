import { Component, OnInit } from '@angular/core';
import { TRANSITION_IMAGE_SCALE, TRANSITION_TEXT } from 'src/app/ui/animations/transitions/transitions.constants';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.scss'],
  animations: [
    TRANSITION_TEXT,
    TRANSITION_IMAGE_SCALE
  ]
})
export class MyAppsComponent implements OnInit {


  _mApps = [

    {
     "id": "5131",
     "name": "Sensify: Phone Sensors Plots",
     "image": "assets/img/clients/pepplus.png",
     "link": "https://play.google.com/store/apps/details?id=io.sensify.sensor",
     "tab": "Android",
     "color": "#FFFFFF"
   },
   {
     "id": "5132",
     "name": "Taru: Plant Finder & Weather",
     "image": "assets/img/clients/whichone.png",
     "link": "https://play.google.com/store/apps/details?id=com.taru",
     "tab": "Android"
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
