import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'niraj-portfolio';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){

    this.addSvgIcons(iconRegistry, sanitizer)

  }

  ngOnInit() {
    // debug current pages
    // this.links$.subscribe((links) => {
    //   // console.log(links);
    // });
  }

  addSvgIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/menu.svg'))

      // .addSvgIcon('home',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/home.svg'))

      // .addSvgIcon('analysis',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/analysis.svg'))

      // .addSvgIcon('progress',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/progress.svg'))

      // .addSvgIcon('results',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/results.svg'))

      // .addSvgIcon('notification',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/notification.svg'))

      // .addSvgIcon('detail_arrow',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/detail_arrow.svg'))


      // .addSvgIcon('call',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/call.svg'))

      // .addSvgIcon('facebook',
      //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/facebook.svg'))
      .addSvgIcon('arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/arrow_top_right.svg'))

      .addSvgIcon('dribble',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/dribble.svg'))

      .addSvgIcon('github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/github.svg'))
        .addSvgIcon('instagram',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/instagram.svg'))

      .addSvgIcon('linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/linkedin3.svg'))
      .addSvgIcon('discord',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/discord.svg'))
      .addSvgIcon('gitter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/social/gitter.svg'))

    // .addSvgIcon('linked-in',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linked-in.svg'))

    // .addSvgIcon('arrow_white',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow_white.svg'))

    // .addSvgIcon('linkedin-team',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin-team.svg'))

    // .addSvgIcon('project',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/project.svg'))

    //   .addSvgIcon('right-arrow',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/svg/right-arrow.svg'))


    //   .addSvgIcon('showcase-web-black',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/web_black.svg'))
    //   .addSvgIcon('showcase-web-colored',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/web_colored.svg'))

    //   .addSvgIcon('showcase-android-black',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/android_black.svg'))
    //   .addSvgIcon('showcase-android-colored',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/android_colored.svg'))

    //   .addSvgIcon('showcase-design-black',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/design_black.svg'))
    //   .addSvgIcon('showcase-design-colored',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/design_colored.svg'))

    //   .addSvgIcon('showcase-doodle-black',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/doodles_black.svg'))
    //   .addSvgIcon('showcase-doodle-colored',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/doodles_colored.svg'))

    //   .addSvgIcon('showcase-illustration-black',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/illustration_black.svg'))
    //   .addSvgIcon('showcase-illustration-colored',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/illustration_colored.svg'))

    //   .addSvgIcon('logout',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'))
    // .addSvgIcon('arrow-left',
    // sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/legacy/arrow_left.svg'))
    // .addSvgIcon('arrow-next',
    // sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/arrow_next.svg'))
    // .addSvgIcon('arrow-prev',
    // sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/arrow_prev.svg'))
    // .addSvgIcon('home',
    // sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/home.svg'))
    // .addSvgIcon('arrow-prev',
    // sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_prev.svg'))
    // .addSvgIcon('arrow-next',
    // sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_next.svg'))


  }
}
