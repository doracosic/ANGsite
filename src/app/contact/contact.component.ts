import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section class="hero is-black is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact us!</h1>
        </div>
      </div>
    </section>


    

    <section class="section">
      <div class="container">
       

        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <div class="field">
            <label class="label">Name</label>
            <input 
             type="text"
             name="name" 
             class="input" 
             [(ngModel)]="name"
              #nameInput="ngModel" 
              required minlength="4"
              required />

              <div *ngIf="nameInput.invalid && (nameInput.dirty || nameInput.touched)" class="alert"></div>
              <div *ngIf="nameInput.errors?.['required']">
                Name is required.
              </div>
              <div *ngIf="nameInput.errors?.['minlength']">
              Name must be at least 4 characters long.
              </div>
              </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              [(ngModel)]="email"
              #emailInput ="ngModel"
              required
            />

            <div *ngIf="emailInput.invalid && (emailInput.dirty || emailInput.touched)" class="alert"></div>
              <div *ngIf="emailInput.errors?.['required']">
                Email is required and must be valid.
              </div>

          </div>

          <div class="field">
            <label class="label">Your message</label>
            <textarea
              name="message"
              class="textarea"
              [(ngModel)]="message"
            ></textarea>
          </div>

          <button type="submit" class="button is-normal is-warning"
          [disabled] ="contactForm.invalid">
            Send
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() { }

  ngOnInit(): void { }
  submitForm() {
    const message = `My name is ${this.name} My email is ${this.email}. My message is ${this.message} `;
    alert(message);
  }
}
