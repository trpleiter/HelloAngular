import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  showSecret = false;
  logArray = [];

  constructor() {}

  ngOnInit(): void {}
  onShowSecret() {
    this.logArray.push(new Date());
    this.showSecret = !this.showSecret;
  }
}
