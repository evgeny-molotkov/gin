import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { menuType } from '../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    currentMenuLink: menuType = menuType.Gallery;

    src: string;
    isShowDetail = false;
    isOriginSize = false;
    isFullContent = true;
    angle = 0;
    scale = 1;
    mouseUp = true;
    mouseX = 0;
    mouseY = 0;
    deltaX = 0;
    deltaY = 0;
    startX = 0;
    startY = 0;
    transformOriginXCoord: number = null;
    transformOriginYCoord: number = null;
    transformOriginX = 'center';
    transformOriginY = 'center';

    images = [
        { path: 'assets/images/gallery/image1.png' },
        { path: 'assets/images/gallery/image2.jpg' },
        { path: 'assets/images/gallery/image3.jpg' },
        { path: 'assets/images/gallery/image4.jpg' },
        { path: 'assets/images/gallery/image5.jpg' },
        { path: 'assets/images/gallery/image6.jpg' }
    ];

    @ViewChild('image') image: any;

    @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
        this.mouseWheelFunc(event);
    }

    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
        this.mouseWheelFunc(event);
    }

    @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
        this.mouseWheelFunc(event);
    }

    constructor() { }

    ngOnInit() {
    }

    openDetailImg(path: string) {
        this.isShowDetail = true;
        this.src = path;

        if (this.transformOriginXCoord == null) {
        this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
        this.transformOriginX =
            this.image.nativeElement.width  ? String(this.deltaX + this.image.nativeElement.width  / 2) + 'px' : 'center';
        }
        if (this.transformOriginYCoord == null) {
            this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
            this.transformOriginY =
            this.image.nativeElement.height ? String(this.deltaY + this.image.nativeElement.height / 2) + 'px' : 'center';
        }
    }

    close() {
        this.isShowDetail = false;
    }

    rotateLeft(): void {
        this.angle -= 90;
        this.angle = this.angle % 360;
    }

    rotateRight(): void {
        this.angle += 90;
        this.angle = this.angle % 360;
    }

    plusCircle() {
        this.scale += 0.2;
        this.isFullContent = false;
    }

    minusCircle() {
        this.scale -= 0.2;
        this.scale = this.scale < 0.1 ? 0.1 : this.scale;
        this.isFullContent = false;
    }

    getFullContentButtonCondition(): boolean {
        let res = false;
        if (this.isOriginSize || !this.isFullContent) {
            res = true;
        }
        return res;
    }

    fullContent() {
        this.isOriginSize = false;
        this.isFullContent = true;
        this.scale = 1;
        this.deltaX = 0;
        this.deltaY = 0;
        this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
        this.transformOriginX =
            this.image.nativeElement.width  ? String(this.deltaX + this.image.nativeElement.width  / 2) + 'px' : 'center';
        this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
        this.transformOriginY =
            this.image.nativeElement.height ? String(this.deltaY + this.image.nativeElement.height / 2) + 'px' : 'center';

        setTimeout(() => {
            this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
            this.transformOriginX =
            this.image.nativeElement.width  ? String(this.deltaX + this.image.nativeElement.width  / 2) + 'px' : 'center';
            this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
            this.transformOriginY =
            this.image.nativeElement.height ? String(this.deltaY + this.image.nativeElement.height / 2) + 'px' : 'center';
        }, 100);
    }

    originSize() {
        this.isOriginSize = true;
        this.isFullContent = false;
        this.scale = 1;
        this.deltaX = 0;
        this.deltaY = 0;
        this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
        this.transformOriginX =
            this.image.nativeElement.width  ? String(this.deltaX + this.image.nativeElement.width  / 2) + 'px' : 'center';
        this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
        this.transformOriginY =
            this.image.nativeElement.height ? String(this.deltaY + this.image.nativeElement.height / 2) + 'px' : 'center';

        setTimeout(() => {
            this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
            this.transformOriginX =
            this.image.nativeElement.width  ? String(this.deltaX + this.image.nativeElement.width  / 2) + 'px' : 'center';
            this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
            this.transformOriginY =
            this.image.nativeElement.height ? String(this.deltaY + this.image.nativeElement.height / 2) + 'px' : 'center';
        }, 100);
    }

    onMouseDown(e: any) {
        const event = e || /* IE */ window.event;
        this.mouseUp = false;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;

        this.startX = this.deltaX;
        this.startY = this.deltaY;
    }

    onMouseMove(e: any) {
        if (this.mouseUp) {
            return;
        }
        const event = e || /* IE */ window.event;

        const deltaXOld = this.deltaX;
        const deltaYOld = this.deltaY;

        this.deltaX = this.startX + event.clientX - this.mouseX;
        this.deltaY = this.startY + event.clientY - this.mouseY;

        if (this.transformOriginX === 'center') {
            this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
        }
        if (this.transformOriginY === 'center') {
            this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
        }

        this.transformOriginXCoord = this.transformOriginXCoord + this.deltaX - deltaXOld;
        this.transformOriginYCoord = this.transformOriginYCoord + this.deltaY - deltaYOld;

        this.transformOriginX = String(this.transformOriginXCoord) + 'px';
        this.transformOriginY = String(this.transformOriginYCoord) + 'px';
    }

    onMouseUp() {
        this.mouseUp = true;
    }

    mouseWheelFunc(e: any) {
        const event = window.event || e; // old IE support
        const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        const angleRad: number = this.toRadians(this.angle);
        let tmpAX = 0,
            tmpAY = 0,
            tmpBX = 0,
            tmpBY = 0;
        let realViewClientX = 0, realViewClientY = 0;
        let flag = 0;

        if (this.transformOriginX === 'center') {
            this.transformOriginXCoord = this.deltaX + this.image.nativeElement.width / 2;
        }
        if (this.transformOriginY === 'center') {
            this.transformOriginYCoord = this.deltaY + this.image.nativeElement.height / 2;
        }

        tmpAX =
        (this.deltaX - this.transformOriginXCoord) * Math.cos(angleRad) - (this.deltaY - this.transformOriginYCoord) * Math.sin(angleRad);
        tmpAY =
        (this.deltaX - this.transformOriginXCoord) * Math.sin(angleRad) + (this.deltaY - this.transformOriginYCoord) * Math.cos(angleRad);
        tmpAX += this.transformOriginXCoord;
        tmpAY += this.transformOriginYCoord;

        tmpBX =
            (event.clientX - this.image.nativeElement.x) +
            (   this.transformOriginXCoord -
                (this.transformOriginXCoord) * this.scale +
                tmpAX * this.scale -
                (event.clientX - this.image.nativeElement.x)
            )
            / this.scale;
        tmpBY =
            (event.clientY - this.image.nativeElement.y) +
            (   this.transformOriginYCoord -
                (this.transformOriginYCoord) * this.scale +
                tmpAY * this.scale -
                (event.clientY - this.image.nativeElement.y)
            )
            / this.scale;

        realViewClientX = (tmpBX - (event.clientX - this.image.nativeElement.x)) * this.scale + event.clientX;
        realViewClientY = (tmpBY - (event.clientY - this.image.nativeElement.y)) * this.scale + event.clientY;

        switch (this.angle) {
            case 90:
                if ((event.clientX < realViewClientX) && (event.clientX > realViewClientX - this.image.nativeElement.height * this.scale) &&
                    (event.clientY > realViewClientY) && (event.clientY < realViewClientY + this.image.nativeElement.width * this.scale)) {
                    flag = 1;
                }
                break;

            case 180:
                if ((event.clientX < realViewClientX) && (event.clientX > realViewClientX - this.image.nativeElement.width * this.scale) &&
                    (event.clientY < realViewClientY) && (event.clientY > realViewClientY - this.image.nativeElement.height * this.scale)) {
                    flag = 1;
                }
                break;

            case 270:
                if ((event.clientX > realViewClientX) && (event.clientX < realViewClientX + this.image.nativeElement.height * this.scale) &&
                    (event.clientY < realViewClientY) && (event.clientY > realViewClientY - this.image.nativeElement.width * this.scale)) {
                    flag = 1;
                }
                break;

            case -90:
                if ((event.clientX > realViewClientX) && (event.clientX < realViewClientX + this.image.nativeElement.height * this.scale) &&
                    (event.clientY < realViewClientY) && (event.clientY > realViewClientY - this.image.nativeElement.width * this.scale)) {
                    flag = 1;
                }
                break;

            case -180:
                if ((event.clientX < realViewClientX) && (event.clientX > realViewClientX - this.image.nativeElement.width * this.scale) &&
                    (event.clientY < realViewClientY) && (event.clientY > realViewClientY - this.image.nativeElement.height * this.scale)) {
                    flag = 1;
                }
                break;

            case -270:
                if ((event.clientX < realViewClientX) && (event.clientX > realViewClientX - this.image.nativeElement.height * this.scale) &&
                    (event.clientY > realViewClientY) && (event.clientY < realViewClientY + this.image.nativeElement.width * this.scale)) {
                    flag = 1;
                }
                break;

            default:
                if ((event.clientX > realViewClientX) && (event.clientX < realViewClientX + this.image.nativeElement.width * this.scale) &&
                    (event.clientY > realViewClientY) && (event.clientY < realViewClientY + this.image.nativeElement.height * this.scale)) {
                    flag = 1;
                }
                break;
        }

        if (flag) {
            this.deltaX = (tmpBX - (event.clientX - this.image.nativeElement.x)) *
            Math.cos(-angleRad) - (tmpBY - (event.clientY - this.image.nativeElement.y)) * Math.sin(-angleRad);

            this.deltaY = (tmpBX - (event.clientX - this.image.nativeElement.x)) *
            Math.sin(-angleRad) + (tmpBY - (event.clientY - this.image.nativeElement.y)) * Math.cos(-angleRad);

            this.deltaX += event.clientX - this.image.nativeElement.x;
            this.deltaY += event.clientY - this.image.nativeElement.y;

            this.transformOriginXCoord = event.clientX - this.image.nativeElement.x;
            this.transformOriginYCoord = event.clientY - this.image.nativeElement.y;

            this.transformOriginX = String(this.transformOriginXCoord) + 'px';
            this.transformOriginY = String(this.transformOriginYCoord) + 'px';

            if (delta > 0) {
                this.scale += 0.2;
            } else if (delta < 0) {
                this.scale -= 0.2;
                this.scale = this.scale < 0.1 ? 0.1 : this.scale;
            }

            this.isFullContent = false;
        }

        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    }

    toRadians (angle: number): number {
        let result = 0;
        switch (angle) {
            case 90:
                result = Math.PI / 2;
                break;

            case 180:
                result = Math.PI;
                break;

            case 270:
                result = Math.PI * 1.5;
                break;

            case -90:
                result = -Math.PI / 2;
                break;

            case -180:
                result = -Math.PI;
                break;

            case -270:
                result = -Math.PI * 1.5;
                break;

            default:
                result = angle * (Math.PI / 180);
                break;
        }
        return result;
    }

}
