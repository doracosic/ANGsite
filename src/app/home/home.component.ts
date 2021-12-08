import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `

  <section class="hero is-black  is-bold is-fullheight ">
  <div class="hero-body is-flex-direction-column ">
    <h1 class="title is-size-1 ">
      Home
    </h1>
  </div>
</section>
  `,
  styles: [
    `
      .hero {
        background-image: url("/assets/img/px4.jpeg") !important;
        background-size: cover;
        background-position: center center;
      }
      
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
