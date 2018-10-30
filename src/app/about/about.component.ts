import { Component, OnInit } from '@angular/core';

import { menuType } from '../models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    currentMenuLink: menuType = menuType.About;

    constructor() { }

    ngOnInit() {
    }

}
