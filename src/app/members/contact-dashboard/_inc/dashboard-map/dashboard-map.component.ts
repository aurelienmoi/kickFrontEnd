import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../../environments/environment';
import '../../../../../../node_modules/mapbox-gl/dist/mapbox-gl.css'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

let baseURL = "myserveradress";
@Component({
  selector: 'app-dashboard-map',
  templateUrl: './dashboard-map.component.html',
  styleUrls: ['./dashboard-map.component.scss'],
})

export class DashboardMapComponent implements OnInit, OnDestroy {
  @Input() userId: string;

  style = 'mapbox://styles/sheepbild/ck4ypwvod3t241cqlza366zmc';
  map: mapboxgl.Map;
  lng = 41.643065138213274;
  lat = 42.68595021382373;
  data: any;
  bitmojiLink: string;
  geoIsReady: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.bitmojiLink = "assets/img/bitmoji.png"
    this.geoIsReady = false;
    console.log(this.geoIsReady);
  }

  ngOnInit() {
    //this.getCustomCoordinates();
   // console.log(this.geoIsReady);
    //console.log(this.userId);
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
  buildMap() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'dashboardMap',
      style: this.style,
      center: [this.lat, this.lng],
      zoom: 11,
    });

    // this.map.addSource('customPoint', {
    //   type: 'geojson',
    //   data: this.data,
    //   cluster: true,
    //   clusterMaxZoom: 14, // Max zoom to cluster points on
    //   clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    // });

    this.map.on('load', (event) => {
    });
  }

  openFullMap() {
    this.router.navigateByUrl('/map');
  }

  getCustomCoordinates() {

    this.http.get(`${baseURL}/chatApp/getCoordinates/${this.userId}`).subscribe(
      (res: any) => {
        this.data = res;
        this.lat = this.data.result.geoJson.features.geometry.coordinates[0]
        this.lng = this.data.result.geoJson.features.geometry.coordinates[1];

        this.buildMap();
        this.geoIsReady = true;
        console.log(this.geoIsReady);
      })
  }
}
