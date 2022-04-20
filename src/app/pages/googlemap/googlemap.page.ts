import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})
export class GooglemapPage implements OnInit {
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  infoWindows: any = [];
  markers: any = [
    {
        title: "golf",
        latitude: "13.724758692704158",
        longitude: "100.46941045470452"
    },
    {
        title: "bright",
        latitude: "13.726385857854075",
        longitude: "100.48376757670309"
    }
  ];
  constructor(private route: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(13.747720711041818, 100.57954392835394);
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  addMarkersToMap(markers){
    for (let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInforWindowToMarker(mapMarker);
    }
  }

  addInforWindowToMarker(marker){
    let infoWindowContent = '<div id="content">' +
                            // '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                            // '<p>Latitude: ' + marker.latitude + '</p>' +
                            // '<p>Longitude: ' + marker.longitude + '</p>' +
                            '<ion-button id="navigate">Navigate</ion-button>' +
                            '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', ()=>{
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () =>{
        document.getElementById('navigate').addEventListener('click',() =>{
          console.log('navigate click');
          //code to using navigate
          window.open('https://www.google.co.th/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude);
        });
      });
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  callback(){
    this.route.navigate(['tabs/showtask-progress']);
  }

}
