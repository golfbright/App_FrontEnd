import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }
  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
}
