import { Component } from '@angular/core';

import { PanelComponent } from './shared/components/panel/panel.component'; 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PanelComponent]
})
export class AppComponent {
  title: string = 'app works!';

  constructor () {}
}
