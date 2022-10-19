import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ReplaySubject, takeUntil, startWith, map, scan, distinctUntilChanged, takeWhile, switchMap, Observable } from 'rxjs';
import { TRANSITION_IMAGE_SCALE, TRANSITION_TEXT } from 'src/app/ui/animations/transitions/transitions.constants';
import { UiUtilsView } from 'src/app/ui/utils/views.utils';

@Component({
  selector: 'app-home-expertise',
  templateUrl: './home-expertise.component.html',
  styleUrls: ['./home-expertise.component.scss'],
  animations: [
    TRANSITION_TEXT,
    TRANSITION_IMAGE_SCALE
  ]
})
export class HomeExpertiseComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  mOnceAnimated = false

  /* ********************************************************************************************
    *                anims
    */
  _mTriggerAnim?= 'false'

  _mTriggerImage?= 'false'


  _mThreshold = 0.2


  @ViewChild('animRefView') vAnimRefView?: ElementRef<HTMLElement>;

  constructor(public el: ElementRef,
    private _ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    public mediaObserver: MediaObserver,
    private scroll: ScrollDispatcher, private viewPortRuler: ViewportRuler) { }

  ngOnInit(): void {
  }



  ngAfterViewInit(): void {
    this.setupAnimation();
  }

  ngOnDestroy(): void {

    this.destroyed$.next(true)
    this.destroyed$.complete()
  }


  public setupAnimation() {
    if (!this.vAnimRefView) return;

    // console.info("home products setupAnimation: " )
    this.scroll.ancestorScrolled(this.vAnimRefView, 100).pipe(
      // Makes sure to dispose on destroy
      takeUntil(this.destroyed$),
      startWith(0),
      map(() => {
        if (this.vAnimRefView != null) {
          var visibility = UiUtilsView.getVisibility(this.vAnimRefView, this.viewPortRuler)
          // console.log("product app-item UiUtilsView visibility: ", visibility)
          return visibility;
        }
        return 0;

      }),
      scan<number, boolean>((acc: number | boolean, val: number) => (val >= this._mThreshold || (acc ? val > 0 : false))),
      // Distincts the resulting triggers 
      distinctUntilChanged(),
      // Stop taking the first on trigger when aosOnce is set
      takeWhile(trigger => {
        // console.info("app-item  !trigger || !this.mOnceAnimated",
        //   !trigger || !this.mOnceAnimated)

        return !trigger || !this.mOnceAnimated
      }, true),
      switchMap(trigger => new Observable<number | boolean>(observer => this._ngZone.run(() => observer.next(trigger))))
    ).subscribe(val => {


      // console.log("home-item setupAnimation ancestorScrolled: ", val)

      if (this.mOnceAnimated) {
        return;
      }

      if (val) {
        // console.log("HomeProductsComponent setupAnimation setupAnimation ancestorScrolled: ", val)

        this.mOnceAnimated = true
        this._mTriggerAnim = 'true'
        this.cdr.detectChanges()
      }
      // if (this.vImageArea != null) {
      //   var visibility = UiUtilsView.getVisibility(this.vImageArea, this.viewPortRuler)
      //   console.log("UiUtilsView visibility: ", visibility)
      // }
    }

    )
  }

  _mTools = [

    // design
    {
      "id": "5131",
      "name": "Figma",
      "logo": "assets/img/tools/figma.svg",
      "link": "https://www.figma.com/",
      "tab": "design"
    },
    {
      "id": "5131",
      "name": "Adobe XD",
      "logo": "assets/img/tools/xd.png",
      "link": "https://www.adobe.com/products/xd.html",
      "tab": "design"
    },

    {
      "id": "5132",
      "name": "Adobe Photoshop",
      "logo": "assets/img/tools/ps.png",
      "link": "https://www.adobe.com/products/photoshop.html",
      "tab": "design"
    },
    {
      "id": "5133",
      "name": "Adobe Illustrator",
      "logo": "assets/img/tools/ai.svg",
      "link": "https://www.adobe.com/products/illustrator.html",
      "tab": "design"
    },
    {
      "id": "5134",
      "name": "Ink Scape",
      "logo": "assets/img/tools/inkscape-logo.svg",
      "link": "https://inkscape.org/",
      "tab": "design"
    },



    // android
    {
      "id": "9110",
      "name": "Android",
      "logo": "assets/img/tools/android.svg",
      "link": "https://developer.android.com/",
      "tab": "android",
      "color": "#3DDC84"
    },
    {
      "id": "9112",
      "name": "Retrofit",
      "logo": "assets/img/tools/square.png",
      "link": "http://square.github.io/retrofit/",
      "tab": "android"
    },
    {
      "id": "9113",
      "name": "RxJava",
      "logo": "assets/img/tools/RxJava-logo.png",
      "link": "http://reactivex.io/",
      "tab": "android"
    },
    {
      "id": "9114",
      "name": "Jetpack Compose",
      "logo": "assets/img/tools/pic_jetpack_compose.png",
      "link": "https://developer.android.com/jetpack/compose",
      "tab": "android"
    },
    {
      "id": "9115",
      "name": "Architecture Components",
      "logo": "assets/img/tools/pic_architecture_components.png",
      "link": "https://developer.android.com/topic/architecture",
      "tab": "android"
    },
    {
      "id": "9116",
      "name": "Kotlin",
      "logo": "assets/img/tools/kotlin-logo.png",
      "link": "https://kotlinlang.org/",
      "tab": "android"
    },

    // cross
{
      "id": "4101",
      "name": "Flutter",
      "logo": "assets/img/tools/flutter_logo.svg",
      "link": "https://flutter.dev/",
      "tab": "Cross",
      "color": "#42A5F5"
    },

    // web

    

    {
      "id": "8102",
      "name": "Polymer",
      "logo": "assets/img/tools/polymer.svg",
      "link": "https://www.polymer-project.org/",
      "tab": "web"
    },

    {
      "id": "8103",
      "name": "WebComponents",
      "logo": "assets/img/tools/web-component-logo.png",
      "link": "https://www.webcomponents.org/",
      "tab": "web"
    },
    {
      "id": "8105",
      "name": "HighCharts js",
      "logo": "assets/img/tools/highchart-logo.png",
      "link": "https://www.highcharts.com/",
      "tab": "web"
    },
    {
      "id": "8108",
      "name": "Sass",
      "logo": "assets/img/tools/sass-logo.svg",
      "link": "https://sass-lang.com/",
      "tab": "web",
      "color": "#CF649A"
    },
    {
      "id": "8106",
      "name": "D3 js",
      "logo": "assets/img/tools/d3.svg",
      "link": "https://d3js.org/",
      "tab": "web"
    },
    {
      "id": "8104",
      "name": "Ngrx",
      "logo": "assets/img/tools/ngrx.svg",
      "link": "https://ngrx.io/",
      "tab": "web"
    },
    {
      "id": "8101",
      "name": "Angular",
      "logo": "assets/img/tools/angular.png",
      "link": "https://angular.io/",
      "tab": "web",
      "color": "#FF4369"
    },
    {
      "id": "8109",
      "name": "Scully",
      "logo": "assets/img/tools/scully.svg",
      "link": "https://https://scully.io/",
      "tab": "web",
    },

    // backend

    {
      "id": "7121",
      "name": "Express",
      "logo": "assets/img/tools/express.png",
      "link": "https://expressjs.com/",
      "tab": "back-end"
    },
    {
      "id": "7122",
      "name": "Sequelize",
      "logo": "assets/img/tools/sequelize.png",
      "link": "http://docs.sequelizejs.com/",
      "tab": "back-end"
    },

    {
      "id": "7126",
      "name": "NodeJs",
      "logo": "assets/img/tools/nodejs.png",
      "link": "https://nodejs.org/en/",
      "tab": "back-end"
    },

    // cloud

    {
      "id": "6121",
      "name": "Firebase",
      "logo": "assets/img/tools/firebase.svg",
      "link": "https://firebase.google.com/",
      "tab": "cloud"
    },

    {
      "id": "6123",
      "name": "Azure",
      "logo": "assets/img/tools/azure.png",
      "link": "https://azure.microsoft.com",
      "tab": "cloud"
    },

    {
      "id": "6124",
      "name": "Google cloud",
      "logo": "assets/img/tools/google-cloud.png",
      "link": "https://cloud.google.com/",
      "tab": "cloud"
    },


  ]

}
