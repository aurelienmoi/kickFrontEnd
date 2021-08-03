import { Component, OnInit } from '@angular/core';
import { TopToolbarComponent } from '../_layouts/top-toolbar/top-toolbar.component';
import { PopoverController, ModalController } from '@ionic/angular';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';
import '../../../../node_modules/mapbox-gl/dist/mapbox-gl.css'
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

import { MessagingPage } from '../messaging/messaging.page';

let baseURL = "myserveradress";
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/sheepbild/ck4ypwvod3t241cqlza366zmc';
  lng = 46.1390432;
  lat = 2.434848;
  data: any;
  customData: any;
  geolocate: any;
  wantsToMark: boolean;
  beatmakerSourceLoaded: boolean;
  userId: any;
  activeLayer1: string;
  activeLayer2: string;
  activeLayer3: string;
  layerActivated: string;
  beatmakersLayer: boolean;
  userPseudo: any;
  placeName: string;
  geoJson: any;
  rappersData: any;
  beatmakersData: any;
  listenerSourceLoaded: boolean;
  rappersSourceLoaded: boolean;
  nblsitenertriggered: number;
  listenerCreated: boolean;
  clipmakerData: any;
  webradioData: any;
  producerData: any;
  producerSourceLoaded: boolean;
  clipmakerSourceLoaded: boolean;
  webradioSourceLoaded: boolean;
  mapboxEventListenerCreated: boolean;
  nonListenersClustersLoaded : boolean;
  listenersOnMapPoints : Array<string>;
  constructor(
    private http: HttpClient,
    private geolocation2: Geolocation,
    private router: Router,
    private popover: PopoverController,
    public modalController: ModalController,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {

    this.layerActivated = "listeners";
    this.listenerSourceLoaded = false;
    this.rappersSourceLoaded = false;
    this.producerSourceLoaded = false;
    this.clipmakerSourceLoaded = false;
    this.beatmakerSourceLoaded = false;
    this.webradioSourceLoaded = false;
    this.nonListenersClustersLoaded=false;
    this.listenersOnMapPoints=[];
    this.ionicGeolocation();
    this.getDatas();
    this.buildMap();

  }

  ionViewDidLeave() {
    if (this.map) {
      this.map.remove();
      console.log("map remove")
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: TopToolbarComponent,
      cssClass: 'popoverClass',
      event: ev
    });
    return await popover.present();
  }

  ionicGeolocation() {
    this.geolocation2.getCurrentPosition().then((resp) => {
      console.log(resp)
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation2.watchPosition();
    watch.subscribe(() => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  getDatas() {

    this.http.get(`${baseURL}/chatApp/getRapperCoordinates`).subscribe(
      (res: any) => {
        this.rappersData = res.object1;
      }
    );

    this.http.get(`${baseURL}/chatApp/getBeatmakerCoordinates`).subscribe(
      (res: any) => {
        this.beatmakersData = res.object1;
      }
    );
    this.http.get(`${baseURL}/chatApp/getCoordinates`).subscribe(
      (res: any) => {
        this.data = res.object1;
      }
    );
    this.http.get(`${baseURL}/chatApp/getWebradioCoordinates`).subscribe(
      (res: any) => {
        this.webradioData = res.object1;
      }
    );
    this.http.get(`${baseURL}/chatApp/getProducerCoordinates`).subscribe(
      (res: any) => {
        this.producerData = res.object1;
      }
    );
    this.http.get(`${baseURL}/chatApp/getClipmakerCoordinates`).subscribe(
      (res: any) => {
        this.clipmakerData = res.object1;
      }
    );
  }


  showListeners() {
    if (this.activeLayer1 = "rapperPoints") {
      var el = this.document.getElementById('rappers');
      if (el) {
        el.removeAttribute('color');
        el.setAttribute('color', 'danger')
      }
    }
    else if (this.activeLayer1 = "beatmakerPoints") {
      var el = this.document.getElementById('beatmakers');
      if (el) {
        el.removeAttribute('color');
        el.setAttribute('color', 'danger')
      }
    }
    if (!this.listenerSourceLoaded) {
      this.map.addSource('customPoint', {
        type: 'geojson',
        data: this.data,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });
      this.listenerSourceLoaded = true;
    }
    this.activeLayer1 = "customPoint";
    this.activeLayer2 = "cluster-count";
    this.activeLayer3 = "unclustered-point"
    this.map.loadImage(
      '../../assets/img/map-icons/city-buildings.png',
      (error, image) => {
        if (error) throw error;
        this.map.addImage('clusters', image);
        this.map.addLayer({
          id: 'customPoint',
          type: 'symbol',
          source: 'customPoint',
          filter: ['has', 'point_count'],
          'layout': {
            'icon-image': 'clusters',
            'icon-size': 0.08
          }
        });

      });

    /* this code before is the code that counts the points on a cluster if we need to take back this feature
        this.map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'customPoint',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          },
          paint: {
            "text-color": "#ffffff"
          }
        });
    */
    this.map.addLayer({
      id: 'unclustered-point',
      type: 'symbol',
      source: 'customPoint',
      filter: ['!', ['has', 'point_count']],
      'layout': {
        'icon-image': 'cat',
        'icon-size': 1
      }
    });
  }

  showPoints(pointsToShow) {

    this.removeLayer(this.activeLayer1);
    this.removeLayer(this.activeLayer2);
    this.removeLayer(this.activeLayer3);


    var el = this.document.getElementById(this.layerActivated);
    if (el) {
      el.removeAttribute('color');
      el.setAttribute('color', 'danger')
    }


    if (pointsToShow === "rappers" && this.layerActivated !== "rappers") {
      this.addSpecificLayer('rappers', 'rappersPoints', this.rappersData, 'musical-notes-outline', 'rapperPoints', 'cluster-count', 'unclusteredRapperPoints', 'rapper')
      this.layerActivated = "rappers";
    }
    else if (pointsToShow === "beatmakers" && this.layerActivated !== "beatmakers") {
      this.layerActivated = "beatmakers"
      this.addSpecificLayer('beatmakers', 'beatmakerPoints', this.beatmakersData, 'beatmakerIcon', 'beatmakerPoints', 'cluster-countBeatMakers', 'unclusteredBeatmakerPoints', 'beatmakerIcon')
    }
    else if (pointsToShow === "producers" && this.layerActivated !== "producers") {
      this.layerActivated = "producers";
      this.addSpecificLayer('producers', 'producerPoints', this.producerData, 'musical-notes-outline', 'producerPoints', 'cluster-countProducers', 'unclusteredProducerPoints', 'clipmakerIcon')
    }
    else if (pointsToShow == "clipmakers" && this.layerActivated !== "clipmakers") {
      this.layerActivated = "clipmakers";
      this.addSpecificLayer('clipmakers', 'clipmakerPoints', this.clipmakerData, 'musical-notes-outline', 'clipmakerPoints', 'cluster-countClipmakers', 'unclusteredClipmakerPoints', 'clipmakerIcon')
    }
    else if (pointsToShow == "webradios" && this.layerActivated !== "webradios") {
      this.layerActivated = "webradios";
      this.addSpecificLayer('webradios', 'webradioPoints', this.webradioData, 'musical-notes-outline', 'webradioPoints', 'cluster-countWebradios', 'unclustereWebradioPoints', 'clipmakerIcon')
    }
    else {
      this.showListeners();
      this.layerActivated = "listeners";

    }
  }




  buildMap() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lat, this.lng],
      zoom: 4,
    });

    this.map.addControl(
      this.geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    this.map.addControl(new mapboxgl.NavigationControl());
    class MyCustomControl {
      container: any;
      map: any;
      onAdd(map) {
        this.map = map;
        this.container = document.createElement('ion-button');
        this.container.className = 'my-custom-control';
        this.container.innerHTML = '<ion-icon name="pin"></ion-icon>&nbsp;Ma Localisation'
        this.container.setAttribute("color", "dark");
        this.container.setAttribute("style", "position:absolute; bottom:94px; right:40px;");
        this.container.setAttribute("size", "small");
        this.container.setAttribute("id", "myCustomId");
        return this.container;
      }
      onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
      }
    }

    const myCustomControl = new MyCustomControl();

    this.map.addControl(myCustomControl);
    document.getElementById("myCustomId").addEventListener("click", () => {
      this.markFunction();
      this.map.removeControl(myCustomControl);
    });


    class FilterControls {
      container: any;
      map: any;
      onAdd(map) {
        this.map = map;
        this.container = document.createElement('ion-button');
        this.container.className = 'my-custom-control';
        this.container.innerHTML = 'Rapper'
        this.container.setAttribute("color", "danger");
        this.container.setAttribute("style", "position:absolute; bottom:50px; right:40px;");
        this.container.setAttribute("size", "small");
        this.container.setAttribute("id", "rappers");
        return this.container;
      }
      onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
      }
    }

    const filterControls = new FilterControls();

    this.map.addControl(filterControls);
    document.getElementById("rappers").addEventListener("click", () => {
      console.log("addevenlistener for rapper  button")
      this.showPoints("rappers")
      //  this.showRappers();
    });

    class BeatMakerControls {
      container: any;
      map: any;
      onAdd(map) {
        this.map = map;
        this.container = document.createElement('ion-button');
        this.container.className = 'my-custom-control';
        this.container.innerHTML = 'Beatmaker'
        this.container.setAttribute("color", "danger");
        this.container.setAttribute("style", "position:absolute; bottom:20px; right:40px;");
        this.container.setAttribute("size", "small");
        this.container.setAttribute("id", "beatmakers");
        return this.container;
      }
      onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
      }
    }

    const beatmakerControls = new BeatMakerControls();

    this.map.addControl(beatmakerControls);
    document.getElementById("beatmakers").addEventListener("click", () => {
      console.log("add beatmaker control")
      this.showPoints("beatmakers");
    });

    class ProducerControl {
      container: any;
      map: any;
      onAdd(map) {
        this.map = map;
        this.container = document.createElement('ion-button');
        this.container.className = 'my-custom-control';
        this.container.innerHTML = 'Producteurs'
        this.container.setAttribute("color", "danger");
        this.container.setAttribute("style", "position:absolute; bottom: -10px; right:40px;");
        this.container.setAttribute("size", "small");
        this.container.setAttribute("id", "producers");
        return this.container;
      }
      onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
      }
    }

    const producerControl = new ProducerControl();

    this.map.addControl(producerControl);
    document.getElementById("producers").addEventListener("click", () => {
      //console.log("add beatmaker control")
      this.showPoints("producers");
    });

    class ClipmakerControl {
      container: any;
      map: any;
      onAdd(map) {
        this.map = map;
        this.container = document.createElement('ion-button');
        this.container.className = 'my-custom-control';
        this.container.innerHTML = 'Vidéastes'
        this.container.setAttribute("color", "danger");
        this.container.setAttribute("style", "position:absolute; bottom: -40px; right:40px;");
        this.container.setAttribute("size", "small");
        this.container.setAttribute("id", "clipmakers");
        return this.container;
      }
      onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
      }
    }

    const clipmakerControl = new ClipmakerControl();

    this.map.addControl(clipmakerControl);
    document.getElementById("clipmakers").addEventListener("click", () => {
      //console.log("add beatmaker control")
      this.showPoints("clipmakers");
    });

    class WebradioControl {
      container: any;
      map: any;
      onAdd(map) {
        this.map = map;
        this.container = document.createElement('ion-button');
        this.container.className = 'my-custom-control';
        this.container.innerHTML = 'Radios-Webradios'
        this.container.setAttribute("color", "danger");
        this.container.setAttribute("style", "position:absolute; bottom: -70px; right:40px;");
        this.container.setAttribute("size", "small");
        this.container.setAttribute("id", "webradios");
        return this.container;
      }
      onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
      }
    }

    const webradioControl = new WebradioControl();

    this.map.addControl(webradioControl);
    document.getElementById("webradios").addEventListener("click", () => {
      //console.log("add beatmaker control")
      this.showPoints("webradios");
    });
    this.map.on('load', () => {

      this.addLayerImages();




      //  this.geolocate.trigger();
      /*   this.geolocate.on('geolocate',  () =>  {
           var userlocation2 = this.geolocate._lastKnownPosition.coords;
           var userlocation= [this.geolocate._lastKnownPosition.coords.latitude, this.geolocate._lastKnownPosition.coords.longitude];
          // this.postCoordinates(userlocation)
           console.log("geolocalisation en cours" , userlocation); })*/



      this.map.on('click', 'unclustered-point', (e) => {
        var coordinates = e.features[0].geometry.coordinates.slice();
        this.userId = e.features[0].properties.userId;
        this.userPseudo = e.features[0].properties.pseudo;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        this.getPlaceName(coordinates).subscribe((res: any) => {
          this.placeName = res.features[0].place_name;
          if (this.placeName = res.features[0].place_name) {
            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(`<p style="color:black; text-align:center; font-size:180%">${this.userPseudo}
               <img style=' margin-right:10%; max-width: 20%; float: right;' src="../../../assets/img/bitmoji.png"></p><p style="color:black; text-align:center;">${this.placeName}</p>
               <i id='myBtn1' class="fas fa-user-circle fa-3x" style='margin-left: 20%; color:#3368FF;'  ></i>
               <i id='myBtn' class='far fa-envelope fa-3x' style='margin: 0% 0 0 5%; color:#3368FF;' fill="clear"  ></i>`)
              .addTo(this.map);
            this.createListener();
          }
        });
      });

      this.map.on('click', 'customPoint', (e) => {
        var features = this.map.queryRenderedFeatures(e.point, { layers: ['customPoint'] });
        var clusterId = features[0].properties.cluster_id,
          point_count = features[0].properties.point_count,
          clusterSource = this.map.getSource(/* cluster layer data source id */'customPoint');
        clusterSource.getClusterLeaves(clusterId, point_count, 0, (err, aFeatures) => {
          new mapboxgl.Popup()
            .setLngLat(aFeatures[0].geometry.coordinates)
            .setHTML(`
              <h5 style=color:black; text-align:center; >Les Top kickers ici :</h5>
              <ul style="color:black; font-size:120%;   display: flex;     list-style: none;   padding: 0;    margin: 0;">
                <li style="flex: 1; text-align: center;">
                  <p style=color:black;>${aFeatures[0].properties.pseudo}</p>
                  <p style=color:black;>${aFeatures[1].properties.pseudo}<p>
                </li>
                <li style=" flex: 1; text-align: center;">
                  <p>
                    <i id='myBtn2' class="fas fa-user-circle fa-lg" style=' color:#3368FF;'  ></i>
                  </p>
                  <p>
                    <i id='myBtn4' class="fas fa-user-circle fa-lg" style='color:#3368FF;'  ></i>
                  </p>
                </li>
                <li style=" flex: 1; text-align: center;">
                <p> 
                  <i id='myBtn3' class='far fa-envelope fa-lg' style='color:#3368FF;' fill="clear"  ></i>
                </p>
                <p> 
                  <i id='myBtn5' class='far fa-envelope fa-lg' style='margin: 0% 0 0 5%; color:#3368FF;' fill="clear"  ></i>
                </p>
                </li>
              </ul> `)
            .addTo(this.map);

          this.createListeners("myBtn2", 'myBtn3', aFeatures[0].properties.userId);
          this.createListeners("myBtn4", 'myBtn5', aFeatures[1].properties.userId);
        })

      })

    });


  }
  createListener() {

    document.getElementById("myBtn1").addEventListener("click", () => {
      this.router.navigate(['/contactDashboard', this.userId])
    });

    document.getElementById("myBtn").addEventListener("click", () => {
      this.presentModalMessaging(this.userId)
    });
  }
  createListeners(profileButton, messageButton, userId) {

    console.log("creating listener for mybtn1 & mybtn", profileButton, messageButton, userId, this.nblsitenertriggered)
    document.getElementById(profileButton).addEventListener("click", () => {
      this.router.navigate(['/contactDashboard', userId])
    });

    document.getElementById(messageButton).addEventListener("click", () => {
      this.presentModalMessaging(userId)
    });
  }


  async presentModalMessaging(userId) {
    const modal = await this.modalController.create({
      component: MessagingPage,
      componentProps: {
        user_id: userId
      }
    });
    return await modal.present();
  }

  markFunction() {
    this.wantsToMark = true;

    this.map.once('click', (event) => {
      //add modal or whatever to confirm the marker choice THEN TRIGGER THE postCoordinates(event.lngLat) 
      alert("confirmer le choix du marker");
      let coordinatesToPost = [event.lngLat.lng, event.lngLat.lat]
      this.postCoordinates(coordinatesToPost);
    })
  }

  postCoordinates(userCoordinates) {

    let data = {
      coordinates: userCoordinates
    }
    this.http.post(`${baseURL}/chatApp/putCoordinates`, data).subscribe(
      (res: any) => {
        console.log(res);
      }

    );

  }


  getPlaceName(coordinates) {
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?types=place&access_token=${environment.mapbox.accessToken}`)
  }

  removeLayer(layer: string) {
    if (this.map.getLayer(layer)) {
      this.map.removeLayer(layer);
    }
  }

  addSpecificLayer(controlBinded, sourceToLoad, dataSource, imageToLoad, layer1ToActivate, layer2ToActivate, layer3ToActivate, imageName) {
    var el = this.document.getElementById(controlBinded);
    el.removeAttribute('color');
    el.setAttribute('color', 'success')
    if (sourceToLoad === 'beatmakerPoints' && !this.beatmakerSourceLoaded) {
      this.map.addSource(sourceToLoad, {
        type: 'geojson',
        data: dataSource,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });
      this.beatmakerSourceLoaded = true;
      this.layerActivated = "beatmakers";
      //this.beatmakersLayer = true;

    }
    if (sourceToLoad === 'customPoint' && !this.listenerSourceLoaded) {

      this.map.addSource(sourceToLoad, {
        type: 'geojson',
        data: dataSource,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      this.listenerSourceLoaded = true;


      this.map.loadImage(
        `../../assets/img/${imageToLoad}.png`,
        (error, image) => {
          if (error) throw error;
          this.map.addImage(imageName, image);
        });
    }
    if (sourceToLoad === 'rappersPoints' && !this.rappersSourceLoaded) {

      this.map.addSource(sourceToLoad, {
        type: 'geojson',
        data: dataSource,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      this.rappersSourceLoaded = true;
      this.layerActivated = "rappers";

    }

    if (sourceToLoad === 'producerPoints' && !this.producerSourceLoaded) {

      this.map.addSource(sourceToLoad, {
        type: 'geojson',
        data: dataSource,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      this.producerSourceLoaded = true;
      this.layerActivated = "producers";

    }

    if (sourceToLoad === 'clipmakerPoints' && !this.clipmakerSourceLoaded) {

      this.map.addSource(sourceToLoad, {
        type: 'geojson',
        data: dataSource,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      this.clipmakerSourceLoaded = true;
      this.layerActivated = "clipmakers";

    }

    if (sourceToLoad === 'webradioPoints' && !this.webradioSourceLoaded) {

      this.map.addSource(sourceToLoad, {
        type: 'geojson',
        data: dataSource,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      this.webradioSourceLoaded = true;
      this.layerActivated = "webradios";
      this.map.loadImage(
        `../../assets/img/${imageToLoad}.png`,
        (error, image) => {
          if (error) throw error;
          this.map.addImage(imageName, image);
        });
    }
    this.activeLayer1 = layer1ToActivate;
    this.activeLayer2 = layer2ToActivate;
    this.activeLayer3 = layer3ToActivate;

    this.map.addLayer({
      id: layer1ToActivate,
      type: 'symbol',
      source: sourceToLoad,
      filter: ['has', 'point_count'],
      'layout': {
        'icon-image': 'nonListenersClusters',
        'icon-size': 0.08
      }
    });

    
/*
    this.map.addLayer({
      id: layer2ToActivate,
      type: 'symbol',
      source: sourceToLoad,
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      },
      paint: {
        "text-color": "#ffffff"
      }
    });*/

    this.map.addLayer({
      id: layer3ToActivate,
      type: 'symbol',
      source: sourceToLoad,
      filter: ['!', ['has', 'point_count']],
      'layout': {
        'icon-image': imageName,
        'icon-size': 1
      }
    });

    if(this.listenersOnMapPoints.includes(sourceToLoad)===false){
      this.map.on('click', layer3ToActivate, (e) => {
        var coordinates = e.features[0].geometry.coordinates.slice();
        this.userId = e.features[0].properties.userId;
        this.userPseudo = e.features[0].properties.pseudo;

        console.log("layer3Toactivate triggered")

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        this.getPlaceName(coordinates).subscribe((res: any) => {

          this.placeName = res.features[0].place_name;
          if (this.placeName = res.features[0].place_name) {
            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(`<p style="color:black; text-align:center; font-size:180%">${this.userPseudo}
             <img style=' margin-right:10%; max-width: 20%; float: right;' src="myserveradress/chatApp/getUserAvatar/${this.userId}" onerror="this.onerror=null; this.src='../../assets/img/bitmoji.png';"></p>
             <p style="color:black; text-align:center;">${this.placeName}</p>
             <i id='myBtn1' class="fas fa-user-circle fa-3x" style='margin-left: 20%; color:#3368FF;'  ></i>
             <i id='myBtn' class='far fa-envelope fa-3x' style='margin: 0% 0 0 5%; color:#3368FF;' fill="clear"  ></i>`)
              .addTo(this.map);

            this.createListeners("myBtn1", "myBtn", this.userId);

          }
        });

      });
  

     console.log("adding map click even")
      this.map.on('click', sourceToLoad, (e) => {
        var features = this.map.queryRenderedFeatures(e.point, { layers: [sourceToLoad] });
        var clusterId = features[0].properties.cluster_id,
          point_count = features[0].properties.point_count,
          clusterSource = this.map.getSource(/* cluster layer data source id */sourceToLoad);
        clusterSource.getClusterLeaves(clusterId, point_count, 0, (err, aFeatures) => {
          console.log('getClusterLeaves', err, aFeatures);
          console.log(aFeatures[0].properties.pseudo)
          new mapboxgl.Popup()
            .setLngLat(aFeatures[0].geometry.coordinates)
            .setHTML(`
            <h5 style=color:black; text-align:center; >Les Top kickers ici :</h5>
            <ul style="color:black; font-size:120%;   display: flex;     list-style: none;   padding: 0;    margin: 0;">
              <li style="flex: 1; text-align: center;">
                <p style=color:black;>${aFeatures[0].properties.pseudo}</p>
                <p style=color:black;>${aFeatures[1].properties.pseudo}<p>
              </li>
              <li style=" flex: 1; text-align: center;">
                <p>
                  <i id='myBtn2' class="fas fa-user-circle fa-lg" style=' color:#3368FF;'  ></i>
                </p>
                <p>
                  <i id='myBtn4' class="fas fa-user-circle fa-lg" style='color:#3368FF;'  ></i>
                </p>
              </li>
              <li style=" flex: 1; text-align: center;">
              <p> 
                <i id='myBtn3' class='far fa-envelope fa-lg' style='color:#3368FF;' fill="clear"  ></i>
              </p>
              <p> 
                <i id='myBtn5' class='far fa-envelope fa-lg' style='margin: 0% 0 0 5%; color:#3368FF;' fill="clear"  ></i>
              </p>
              </li>
            </ul> `)
            .addTo(this.map);

          this.createListeners("myBtn2", 'myBtn3', aFeatures[0].properties.userId);
          this.createListeners("myBtn4", 'myBtn5', aFeatures[1].properties.userId);

        })
        console.log(e.features[0])
      })
       this.listenersOnMapPoints.push(sourceToLoad)

      }
    
  }
  addLayerImages() {
    this.map.loadImage(
      `../../assets/img/beatmakerIcon.png`,
      (error, image) => {
        if (error) throw error;
        this.map.addImage('beatmakerIcon', image);
      });
    this.map.loadImage(
      `../../assets/img/rapperIcon.png`,
      (error, image) => {
        if (error) throw error;
        this.map.addImage('rapper', image);
      });
    this.map.loadImage(
      '../../assets/img/sasso.png',
      (error, image) => {
        if (error) throw error;
        this.map.addImage('cat', image);

        this.showListeners()
      });
    this.map.loadImage(
      `../../assets/img/clipmakerIcon.png`,
      (error, image) => {
        if (error) throw error;
        this.map.addImage('clipmakerIcon', image);
      });
      this.map.loadImage(
        '../../assets/img/map-icons/city-buildings.png',
        (error, image) => {
          if (error) throw error;
          this.map.addImage('nonListenersClusters', image);

        })
  }
  

}
