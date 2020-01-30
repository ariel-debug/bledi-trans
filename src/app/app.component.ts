import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.use('sq');
  }
  title = 'bledi-trans';

  ngOnInit() {

  }

  onEnglishUse() {
    this.translate.use('en');
  }

  onAlbanianUse() {
    this.translate.use('sq');
  }
}
