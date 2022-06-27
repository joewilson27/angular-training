import { Component } from '@angular/core';
// @Component similar to Annotation in Java world
@Component({
  selector: 'app-root', // this is for selector in html <app-root></app-root>
  templateUrl: './app.component.html', // file html to be rendered
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'This is My First App';

  firstName = 'Bill';
  lastName = 'Smith';
}
