import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewEncapsulation';
  constructor(private router: Router) {

  }
  changeComponent(value: any) {
    // debugger;
    console.log(value);
    switch (value) {
      case 'Emulated':
        // Code for Emulated view encapsulation
        // debugger;
        this.router.navigate(['/Emulated']);
        break;
      case 'None':
        // Code for None view encapsulation
        this.router.navigate(['/None']);
        break;
      case 'ShadowDOM':
        // Code for ShadowDOM view encapsulation
        this.router.navigate(['/ShadowDOM']);
        break;
      default:
        // Code for handling unknown or unsupported values
        break;
    }
  }
}
