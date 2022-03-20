import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtask-booked',
  templateUrl: './showtask-booked.page.html',
  styleUrls: ['./showtask-booked.page.scss'],
})
export class ShowtaskBookedPage implements OnInit {
  announcement = [
    {
      announcementTitle: "Test1",
      announcementDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      announcementTitle: "Test2",
      announcementDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];

  constructor(private route: Router) {
    this.announcement = this.announcement.map(item => ({
      ...item,
      showMore: false
    }));
   }

  ngOnInit() {
  }
  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

  pageBooked(){
    this.route.navigate(['showtask-booked']);
  }
  pageMap(){
  }
}
