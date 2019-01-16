import { Component, OnInit } from '@angular/core';
import { SlideService } from '../slide.service';
import { ActivatedRoute } from '@angular/router';
import { SlideInfo } from '../SlideInfo';
import { Router, NavigationEnd } from '@angular/router';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    public slide: SlideInfo;
    constructor(
        private slideService: SlideService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnInit() {
        this.getSlide();
    }

    getSlide(): void {
        const id = this.route.snapshot.paramMap.get("id")
        this.slideService.getSlide(id)
            .subscribe(data => {
                this.slide = data
                console.log(this.slide);
            });
    }

    changeSlide(newSlideNum): void {
        this.router.navigate(['presentation', newSlideNum]);
    }
}
