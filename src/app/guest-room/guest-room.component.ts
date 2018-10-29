import { Component, OnInit } from '@angular/core';

import { menuType } from '../models';

@Component({
  selector: 'app-guest-room',
  templateUrl: './guest-room.component.html',
  styleUrls: ['./guest-room.component.scss']
})
export class GuestRoomComponent implements OnInit {

  currentMenuLink: menuType = menuType.GuestRoom;

  constructor() { }

  ngOnInit() {
  }

}
