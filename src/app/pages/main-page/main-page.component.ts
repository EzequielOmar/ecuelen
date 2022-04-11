import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('main') main!: ElementRef;
  @ViewChild('services', { read: ElementRef }) services!: ElementRef;
  language: string = 'es';
  pageYoffset = 0;

  @HostListener('window:scroll') onScroll() {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private translate: TranslateService, private rd: Renderer2) {
    translate.setDefaultLang(this.language);
  }

  ngAfterViewInit(): void {
    this.lazyLoadBgImages();
  }

  setLanguage(lang: string): void {
    this.language = lang;
    this.translate.use(lang);
  }

  blockScroll(e: any, sectionIndex: number) {
    let scrollTo =
      e.deltaY > 0
        ? sectionIndex * window.innerHeight + window.innerHeight
        : sectionIndex * window.innerHeight - window.innerHeight;
    window.scrollTo(0, scrollTo);
    e.stopPropagation();
    e.preventDefault();
  }

  private lazyLoadBgImages() {
    this.rd.setStyle(
      this.main.nativeElement,
      'background',
      'url("assets/images/main-bg.webp")'
    );
    this.rd.setStyle(
      this.services.nativeElement,
      'background',
      'url("assets/images/main-bg_black.webp")'
    );
  }
}
