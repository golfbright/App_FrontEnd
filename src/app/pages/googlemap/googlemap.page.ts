import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  markers: any = [];
  gps: string;
  split: any;
  latitude: string;
  longitude: string;
  constructor(private route: Router,private routes: ActivatedRoute) {
    this.routes.params.subscribe((params: Params) => this.gps = params['dataFormParam']);
  }

  ngOnInit() {
    this.split = this.gps.split(",");
    this.longitude = this.split[1].split(" ");
    console.log(this.longitude[1]);
    this.markers = [{title: "golf",latitude: this.split[0],longitude:this.longitude[1]}];
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
    console.log (markers);
    for (let marker of markers){
      console.log(marker.latitude);
      console.log(marker.longitude);
      let position = new google.maps.LatLng(marker.latitude,marker.longitude);
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

}
