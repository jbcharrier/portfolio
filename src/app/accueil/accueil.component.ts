import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent implements OnInit {
  xpYears: any;
  constructor() {}

  ngOnInit() {
    this.xpYears = moment([2015]).toNow(true);
  }

  openLinkSocialMedia(media: string) {
    let url: string = '';
    switch (media) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/jean-baptiste-charrier';
        break;
      case 'x':
        url = 'https://x.com/JBCHARRIER';
        break;
      case 'github':
        url = 'https://github.com/jbcharrier';
        break;

      default:
        break;
    }
    window.open(url, '_blank');
  }
}
