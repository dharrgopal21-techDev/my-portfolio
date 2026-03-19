import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issueDate: 'February 4, 2026',
      expiryDate: 'February 4, 2029',
      credentialId: '8688c02cfd5947b2813cc1cf56eb7397',
      verificationUrl: 'https://aws.amazon.com/verification'
    }
  ];
}
