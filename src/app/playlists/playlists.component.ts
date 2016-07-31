import { Component, OnInit } from '@angular/core';

import { Playlist } from '../shared/models/playlist';

@Component({
  moduleId: module.id,
  selector: 'app-playlists',
  templateUrl: 'playlists.component.html',
  styleUrls: ['playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
