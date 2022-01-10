import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  option: string = 'recipes';
  onChangeOption = (option) => {
    this.option = option;
  };

  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];
  // onIntervalFired = (lastNumber) => {
  //   if (lastNumber % 2 == 0) {
  //     this.evenNumbers.push(lastNumber);
  //   } else {
  //     this.oddNumbers.push(lastNumber);
  //   }
  // };
}
