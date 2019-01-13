import { Component, OnInit } from '@angular/core';
import { SlideService } from '../slide.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private slideService: SlideService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSlide();
  }

  getSlide(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.slideService.getSlide(id)
      .subscribe((data: any[]) => console.log(data));
  }
}
