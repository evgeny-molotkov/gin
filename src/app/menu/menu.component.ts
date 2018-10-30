import { Component, OnInit, Input } from '@angular/core';

import { menuType } from '../models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input() currentMenuLink: menuType;

    constructor() { }

    ngOnInit() {
    }

    isCurrentLink(link: menuType) {
        return link === this.currentMenuLink;
    }

}
