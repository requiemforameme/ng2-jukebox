import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
}
