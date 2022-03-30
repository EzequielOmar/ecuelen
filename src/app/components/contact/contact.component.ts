import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMessageService } from 'src/app/services/send-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  loading: boolean = false;
  sended: boolean = false;
  success: boolean = false;
  error: boolean = false;

  constructor(private fb: FormBuilder, private sm: SendMessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  send() {
    this.sended = true;
    setTimeout(() => {
      this.sended = false;
    }, 4000);
    if (this.contactForm.valid) {
      this.loading = true;
      this.sm
        .newMessage(this.contactForm.value)
        .then(() => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 4000);
        })
        .catch(() => {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 4000);
        })
        .finally(() => {
          this.loading = false;
          this.contactForm.reset();
        });
    }
  }
}
