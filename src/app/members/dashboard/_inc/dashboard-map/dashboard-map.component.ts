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
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }


  openFullMap() {
    this.router.navigateByUrl('/map');
  }
}
