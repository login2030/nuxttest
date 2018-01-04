<template>
  <section class="container">
    <h1>Найдите нас на карте</h1>
    <p>Как видно, вставить карту тож не проблема)</p>
    <div v-show="mapload" id="mapid" style="width: 100%; height: 400px;"></div>
  </section>
</template>

<script>
export default {
  async asyncData() {
    return {
      mapload: true,
      map: null
    };
  },

  head: {
    script: [
      {
        src: 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.js'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css' }
    ]
  },

  mounted() {
    /*global L */
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }
    ).addTo(this.map);
    L.marker([51.5, -0.09])
      .addTo(this.map)
      .bindPopup('Это наша компания <br> ХАХА!')
      .openPopup();
    this.map.on('load', ()=> { // карта загрузилась, можно показывать её посетителям (чет не работает)
      this.mapload = true;
      window.console.log(654654654654);
    });
  },

  destroyed() {
    this.map.remove(); // Снесли карту
    this.mapload = false; // Сказали, что она не загрузилась
  }
};
</script>
