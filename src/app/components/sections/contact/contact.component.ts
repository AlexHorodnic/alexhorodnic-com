import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { portfolioData } from '../../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly portfolio = portfolioData;
  protected readonly contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });
  protected readonly contactFormState = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  protected readonly contactFormStatusMessage = signal('');

  protected getContactFieldError(field: 'name' | 'email' | 'message'): string {
    const control = this.contactForm.controls[field];

    if (!control.touched || control.valid) {
      return '';
    }

    if (control.hasError('required')) {
      return `${field === 'email' ? 'Email' : field === 'name' ? 'Name' : 'Message'} is required.`;
    }

    if (control.hasError('email')) {
      return 'Enter a valid email address.';
    }

    return '';
  }

  protected async submitContactForm(): Promise<void> {
    this.contactFormStatusMessage.set('');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.contactFormState.set('error');
      this.contactFormStatusMessage.set('Please complete the required fields before sending.');
      return;
    }

    const endpoint = environment.contactFormEndpoint.trim();
    const accessKey = environment.contactFormAccessKey.trim();

    if (!endpoint || !accessKey) {
      this.contactFormState.set('error');
      this.contactFormStatusMessage.set('Contact form is not configured yet. Add the endpoint and Web3Forms access key in the environment file.');
      return;
    }

    this.contactFormState.set('loading');

    const formValue = this.contactForm.getRawValue();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formValue.name,
          email: formValue.email,
          message: formValue.message,
          subject: `Portfolio contact from ${formValue.name}`,
          from_name: formValue.name,
        }),
      });

      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || 'Contact form submission failed.');
      }

      this.contactForm.reset();
      this.contactFormState.set('success');
      this.contactFormStatusMessage.set('Thanks. Your message has been sent.');
    } catch {
      this.contactFormState.set('error');
      this.contactFormStatusMessage.set('Something went wrong while sending your message. Please try again or email me directly.');
    }
  }
}
