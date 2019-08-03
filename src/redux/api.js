import MapboxClient from '@mapbox/mapbox-sdk'
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding'
import config from '../utils/config';

const baseClient = MapboxClient({ accessToken: config.get('MAPBOX_ACCESS_TOKEN') })
const mapboxGeocoder = MapboxGeocoder(baseClient)

async function suggest(text) {
    
    let result = null;
    try {
      await mapboxGeocoder.forwardGeocode({
        query: text,
        autocomplete: true
      }).send()
      .then(response => {
          result = response.body.features
      });
    } catch (e) {
        console.log(e)
    }
    
    return result
}

export default { suggest }