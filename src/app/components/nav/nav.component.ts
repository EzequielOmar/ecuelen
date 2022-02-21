import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  mobile: boolean = false;
  @Output() languageSelected: EventEmitter<string> = new EventEmitter();
  @Input() lang?: string;
  @HostListener('window:resize', ['$event']) onResize() {
    this.hideMobileMenu();
  }

  constructor() {}

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.languageSelected.emit(lang);
  }

  hideMobileMenu() {
    this.mobile = false;
  }
}
