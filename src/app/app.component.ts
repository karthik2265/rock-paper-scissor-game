import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  greeting: string = 'Hello Karthik 👋';
  showRules: boolean = false;

  displayRules() {
    this.showRules = true;
    console.log('display rules modal');
  }

  closeRules(): void {
    this.showRules = false;
    console.log('close rules modal');
  }
}
