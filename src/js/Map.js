import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = "pk.eyJ1IjoiZ2lnZ2xlbW9vbiIsImEiOiJja2oxdHd6bGMwbXJrMnRwOGNycmJ5M3p1In0.aLX7_8ebaAFPS1S_0j70bA";

export default class Map {
  constructor(latitude, longitude) {
    this.map = null;
    this.mapMarker = null;
    this.mapInit(latitude, longitude);
  }

  mapInit(latitude, longitude) {
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 9,
    });

    this.mapMarker = new mapboxgl.Marker({
      color: "red",
      draggable: true,
    })
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup({
        closeOnMove: true,
      }))
      .addTo(this.map);
    this.bind();
    return this.map;
  }

  bind() {
    this.mapMarker.on("dragend", () => {
      const langLat = this.mapMarker.getLngLat();

      this.onMapSearch([langLat.lat, langLat.lng]);
    });
  }

  onMapSearch() {
    throw new Error("try again", this);
  }

  moveMapCenter(latitude, longitude) {
    this.map.jumpTo({ center: [longitude, latitude] });
    this.mapMarker.setLngLat([longitude, latitude]);
  }
}
