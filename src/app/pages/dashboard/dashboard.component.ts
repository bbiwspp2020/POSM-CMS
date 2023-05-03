import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  translate: TranslateService;
  constructor(
    translate: TranslateService
  ) {
    this.translate = translate;
}
language:any
  ngOnInit(): void {
  }
  changeLanguage(lang: string) {
    localStorage.setItem('selectedLanguage', this.language);
    this.translate.use(lang);
  }

}
