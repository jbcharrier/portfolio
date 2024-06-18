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
}
