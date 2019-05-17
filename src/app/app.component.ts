import { Component } from '@angular/core';

import { POSTS } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercice anglular';

  posts = POSTS;
  
}
