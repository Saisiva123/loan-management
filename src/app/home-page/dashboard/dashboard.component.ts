import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  slides = [
    {
      reminder: "Reminder",
      content: "Search patients and get access to their profile using Face Scan"
    },
    {
      reminder: "Interest & fees",
      content: "Manage and retain your patients using A.I Powered Features.Your Statement contains Interest and Fees"
    },
    {
      reminder: "Reminder",
      content: "Explain the condition better to your patients with 3D Anatomy Models "
    }
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnFocus": false,
    "pauseOnHover": true,
    "pauseOnDotsHover": false,
    "speed": 1000,
    "fade": false,
    "cssEase": 'linear'
  };
  remindLaterEnabled: boolean = false;
  payNowEnabled: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }
  remindNow() {
    this.remindLaterEnabled = !this.remindLaterEnabled;
    this.payNowEnabled = !this.remindLaterEnabled
  }
  payNow() {
    this.payNowEnabled = !this.payNowEnabled;
    this.remindLaterEnabled = !this.payNowEnabled;
  }
}
