import React from 'react';
import { StyleSheet, View } from 'react-native';
import DirectionForm from '../components/DirectionForm'
import MapboxGL from "@react-native-mapbox-gl/maps";
import config from '../utils/config';
import RouteContainer from '../containers/RouteContainer'
import QueryResults from '../containers/SuggestionsResultsContainer'
import OriginAnnotation from '../containers/OriginAnnotationContainer'
import DestinationAnnotation from '../containers/DestinationAnnotationContainer'
import Geolocation from 'react-native-geolocation-service';

class Directions extends React.Component {

  state = { 
    startingPoint: 0,
    endingPoint: 0,
    deviceWidth: 0,
    centerCoordinate: [-95.353442, 29.732862] // [longitude, latitude] format
  }

  componentWillMount() {
    this.getUserLocation()
  }

  componentDidMount() {
    MapboxGL.setAccessToken(config.get('MAPBOX_ACCESS_TOKEN'));
    MapboxGL.setTelemetryEnabled(false);
  }

  getUserLocation() {
      Geolocation.getCurrentPosition(
        (position) => {
          const long = position.coords.longitude
          const lat = position.coords.latitude

          this.setState({ centerCoordinate: [long, lat]})
        },
        (error) => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true }
    );
  }

  render() {    
      return (
          <View onLayout={this.onLayout} style={styles.page}>
            <DirectionForm />
            <QueryResults />
              <MapboxGL.MapView
                    logoEnabled={false}
                    style={styles.map}
                >
                <MapboxGL.Camera
                  centerCoordinate={this.state.centerCoordinate}
                  zoomLevel={13}
                  animationDuration={0}
                />
                <OriginAnnotation />
                <DestinationAnnotation />
                <RouteContainer />
              </MapboxGL.MapView>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 50, 
    flex: 1,
  },
  container: {
    height: 375,
    alignSelf: 'stretch' 
  },
  map: {
    flex: 1,
    zIndex: 0
  },
  inputField: {
    backgroundColor: "#F6F8F9"
  }
});
  
export default Directions