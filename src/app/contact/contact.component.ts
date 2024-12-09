import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 class="text-2xl font-bold mb-6">Contact Me</h2>
      <form (ngSubmit)="onSubmit()" [formGroup]="contactForm">
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input type="text" formControlName="name" class="form-input" placeholder="Your Name" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" formControlName="email" class="form-input" placeholder="Your Email" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Message</label>
          <textarea formControlName="message" class="form-textarea" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" class="btn-primary w-full">Send</button>
      </form>
    </div>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value); // Replace with actual email service integration
      alert('Message sent successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  }
}
