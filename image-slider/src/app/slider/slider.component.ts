import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: [ './slider.component.css' ]
})
export class SliderComponent implements OnInit {
    public imageUrls :Array<string> = [];
    public currentImage :string = '';

    constructor() {
        this.imageUrls = [
            "http://placehold.it/350x250/e8117f/fff&amp;text=Product+Main",
            "http://placehold.it/350x250/00ffff/000&amp;text=Product+Image+2",
            "http://placehold.it/350x250/ff00ff/fff&amp;text=Product+Image+3",
            "http://placehold.it/350x250/ffff00/000&amp;text=Product+Image+4",
            "http://placehold.it/350x250/7B1C8E/fff&amp;text=Product+Image+5",
            "http://placehold.it/350x250/9EF383/000&amp;text=Product+Image+6",
            "http://placehold.it/350x250/D64908/fff&amp;text=Product+Image+7",
            "http://placehold.it/350x250/E3A3A1/000&amp;text=Product+Image+8",
        ];
        this.currentImage = this.imageUrls[0];
    }

    slideLeft() {

    }

    slideRight() {
        console.log('right');

        // console.log(this.imageUrls.p)
        this.imageUrls.push(this.imageUrls.shift());
        this.currentImage = this.imageUrls[0];
        console.log(this.imageUrls);
    }

    ngOnInit() {
        
    }
}