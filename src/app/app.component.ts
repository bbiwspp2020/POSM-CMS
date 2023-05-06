import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hrefs: string = "";
  url:any = ""
  translate: TranslateService;
  constructor(
    private route: ActivatedRoute,
    private Location: Location,
    translate: TranslateService
  ) {
    this.translate = translate;
    this.translate.setDefaultLang('en');
  }
  language:any
  ngOnInit() {
    this.url = this.Location.path()
    this.language = localStorage.getItem('selectedLanguage')
    this.language = this.translate
    console.log(this.language)
  }
  title = 'POSM';
  Logout() {
    window.location.href = '/'
  }
  changeLanguage(lang: string) {
    console.log(this.language)
    localStorage.setItem('selectedLanguage', this.language);
    this.translate.use(lang);
  }
}
