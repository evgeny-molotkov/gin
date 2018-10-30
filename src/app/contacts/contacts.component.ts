import { Component, OnInit } from '@angular/core';

import { menuType } from '../models';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    currentMenuLink: menuType = menuType.Contacts;

    constructor() { }

    ngOnInit() {
    }

}
