import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

  <div class="footer is-light">
  <div class="container content has-text-centered">
    <p> Copyright © 2021 Dora. All Rights Reserved </p>
  </div>
</div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

