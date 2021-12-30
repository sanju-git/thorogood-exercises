import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
  styles: [
    `
      .white-text {
        color: white;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  secretPassword = 'Tuna';
  showDetails = false;
  toggleCount = 0;
  logs = [];
  constructor() {}
  toggleDisplay() {
    this.showDetails = !this.showDetails;
    this.toggleCount += 1;
    this.logs.push(Date.now());
  }
  getBackGroundColor() {
    return this.toggleCount >= 5 ? 'blue' : '';
  }
  ngOnInit(): void {}
}
