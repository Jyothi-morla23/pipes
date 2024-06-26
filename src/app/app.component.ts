import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: string = '';
  public date: Date = new Date();
  public isDate: boolean = false;
  public amount: number = 0;

  constructor() {}
  onNameChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }

  onDateChange(event: any) {
    this.isDate = true;
    this.date = event.target.value;
  }

  onAmountChange(event: any) {
    this.amount = parseFloat(event.target.value);
  }
}
