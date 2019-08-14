import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() {}

  slideOptsTop = {
    spaceBetween: 0,
    slidesPerView: 1.15
  };
  /*
    slider with more narrow cards, 2 fully visible slides
  */
  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 2.65
  };
}
