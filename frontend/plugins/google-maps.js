import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAvk6SjKG9xdYmWLwuwy-nmJjnCCJwvsLI',
    libraries: 'places'
  }
})
