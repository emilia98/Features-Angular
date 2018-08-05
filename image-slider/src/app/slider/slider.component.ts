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
            "https://cdn.lynda.com/course/438407/438407-635907149496560185-16x9.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScB7zF23Gc_f3zVjtrH3gNumXHTLHNup1T5JB8xWz7zlTb57PW",
            "https://xenforo.com/community/media/1.188/full",
            "https://vignette.wikia.nocookie.net/avali/images/7/7d/2-graphic.png/revision/latest?cb=20140201072016",
            "https://i.imgur.com/vLqz2gS.png",
            "https://s3.amazonaws.com/tinycards/image/46d8c4f31fa6ac3edf3ee4dc3f004613",
            "http://www.godhungry.org/wp-content/uploads/2012/08/5.png",
            "http://pngimg.com/uploads/number6/number6_PNG18572.png",
            "https://upload.wikimedia.org/wikipedia/commons/7/75/MetroDF_Linea_7.jpg",
            "https://michellebowden.com.au/media2/2012/12/8.png",
        ];
        this.currentImage = this.imageUrls[0];
    }

    slideLeft() {
        this.imageUrls.unshift(this.imageUrls.pop());
        this.currentImage = this.imageUrls[0];
    }

    slideRight() {
        // console.log('right');

        // console.log(this.imageUrls.p)
        this.imageUrls.push(this.imageUrls.shift());
        this.currentImage = this.imageUrls[0];
        // console.log(this.imageUrls);
    }

    ngOnInit() {
        
    }
}