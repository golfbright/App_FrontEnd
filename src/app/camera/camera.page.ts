import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photo: SafeResourceUrl;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    
  }
  
  async takePicture(){
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl))
  }
  
}
 