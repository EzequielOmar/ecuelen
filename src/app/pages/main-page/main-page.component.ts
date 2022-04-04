import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  language: string = 'es';
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll() {
    //   console.log(window.pageYOffset);
    //   console.log(this.pageYoffset);

    if (window.pageYOffset > this.pageYoffset) {
      if (this.pageYoffset < window.innerHeight)
        window.scroll({
          top: window.innerHeight,
          left: 0,
          behavior: 'auto',
        });
    } else console.log('scroll up');
    this.pageYoffset = window.pageYOffset;
  }

  constructor(
    private translate: TranslateService,
    private scroll: ViewportScroller
  ) {
    translate.setDefaultLang(this.language);
  }

  setLanguage(lang: string): void {
    this.language = lang;
    this.translate.use(lang);
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
