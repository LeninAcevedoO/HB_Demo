import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  iframeSrc: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Define la URL que quieres cargar en el iframe
    // const url = 'https://lookerstudio.google.com/embed/reporting/55d3f1ce-91d3-458a-8ff5-b57754b8e8de/page/v1C7D';
    const url = 'https://lookerstudio.google.com/embed/reporting/b0d9c997-a261-44d8-96ae-90a154a75c77/page/v1C7D';
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}
