import { Component, OnInit, Input } from '@angular/core';

import { menuType, MenuItem } from '../models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input() currentMenuLink: menuType;

    public menuItems: Array<MenuItem>;

    constructor() {
        this.menuItems = [
            {
                name: menuType.About,
                link: '/about',
                text: 'О нас'
            },
            {
                name: menuType.Gallery,
                link: '/gallery',
                text: 'Галерея'
            },
            {
                name: menuType.GuestRoom,
                link: '/guest-room',
                text: 'Гостевая'
            },
            {
                name: menuType.Contacts,
                link: '/contacts',
                text: 'Контакты'
            },
        ];
    }

    ngOnInit() {
    }

    isCurrentLink(link: menuType) {
        return link === this.currentMenuLink;
    }

}
