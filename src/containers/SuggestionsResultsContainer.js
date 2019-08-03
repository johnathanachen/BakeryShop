import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import MapboxDirections from '@mapbox/mapbox-sdk/services/directions';
import config from '../utils/config';
import {
    hideListView,
    updateDestinationInputField,
    updateOriginInputField,
    updateOriginCoordLat,
    updateOriginCoordLong,
    updateDestinationCoordLat,
    updateDestinationCoordLong,
    fetchNewRoute
} from '../redux/actions'


class QueryResults extends React.PureComponent {

    state = {
        mapboxClient: null
    }

    componentDidMount() {
        this.setState({ mapboxClient: MapboxDirections({ accessToken: config.get('MAPBOX_ACCESS_TOKEN') }) })
    }   

    _onPressButton = (item) => {
        this.updateLocationByType(item, this.fetchThis)
        this.props.dismissResults()
    }

    async createNewRoute(origin, destination, mapboxClient) {
        let directions = null;

        try {
            await mapboxClient.getDirections({
                profile: 'driving-traffic',
                waypoints: [
                    { coordinates: origin },
                    { coordinates: destination }
                ], 
                geometries: 'geojson'
            }).send()
                .then(response => {
                    directions = response.body.routes[0];
                    
            });
        } catch (e) {
            console.log(e) // sentry or other error logger
        }

        return directions
    }

    updateLocationByType = (place) => {

        let origin = [this.props.type.originCoordLong, this.props.type.originCoordLat]
        let destination = [this.props.type.destinationCoordLong, this.props.type.destinationCoordLat]
        
        if (this.props.type.queryType === 'origin') {
            this.props.updateOriginInputField(place.place_name)
            this.props.updateOriginCoordLat(place.geometry.coordinates[1])
            this.props.updateOriginCoordLong(place.geometry.coordinates[0])

            origin = [place.geometry.coordinates[0], place.geometry.coordinates[1]]
            
        } else if (this.props.type.queryType === 'destination') {
            this.props.updateDestinationInputField(place.place_name)
            this.props.updateDestinationCoordLat(place.geometry.coordinates[1])
            this.props.updateDestinationCoordLong(place.geometry.coordinates[0])

            destination = [place.geometry.coordinates[0], place.geometry.coordinates[1]]      
        }

        this.handleNewRouteRequest(origin, destination)
        
    }

    handleNewRouteRequest = (origin, destination) => {
        if (this.props.type.isOriginAnnotationShown == true && this.props.type.isDestinationAnnotationShown == true) {      
            this.props.fetchNewRoute(origin, destination, this.createNewRoute, this.state.mapboxClient)
        }
    }

    renderItem = ({ item, index }) => (
        <TouchableHighlight style={styles.row} onPress={() => this._onPressButton(item)}>
            <View key={index}>
                <Text>{item.place_name}</Text>
            </View>
        </TouchableHighlight>
    )
    
    render() {

        const { isShown } = this.props.value
        const { suggestions } = this.props.type

        if (!isShown) {
            return null;
        }

        return (
            <FlatList
                style={styles.container}
                data={suggestions}
                renderItem={this.renderItem}
                />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        height: '100%'
    },
    row: {
        height: 50,
        paddingLeft: 15,
        paddingTop: 15
    }
})


function mapStateToProps(state) {
    return {
        value: state.toggleReducer,
        type: state.queryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dismissResults: () => dispatch(hideListView()),
        updateOriginInputField: (location) => dispatch(updateOriginInputField(location)),
        updateDestinationInputField: (location) => dispatch(updateDestinationInputField(location)),
        updateOriginCoordLat: (lat) => dispatch(updateOriginCoordLat(lat)),
        updateOriginCoordLong: (long) => dispatch(updateOriginCoordLong(long)),
        updateDestinationCoordLat: (lat) => dispatch(updateDestinationCoordLat(lat)),
        updateDestinationCoordLong: (long) => dispatch(updateDestinationCoordLong(long)),
        fetchNewRoute: (origin, destination, mapboxClient, createNewRoute) => dispatch(fetchNewRoute(origin, destination, mapboxClient, createNewRoute))
    }
 
}
    

export default connect(mapStateToProps, mapDispatchToProps)(QueryResults)