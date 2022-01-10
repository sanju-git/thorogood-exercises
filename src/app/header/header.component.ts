import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() changeOption = new EventEmitter();
  constructor() {}

  onChangeOption = (option) => {
    this.changeOption.emit(option);
  };
  ngOnInit(): void {}
}
