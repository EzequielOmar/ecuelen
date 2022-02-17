import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecuelen';
  language: string = 'en';
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll() {
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
