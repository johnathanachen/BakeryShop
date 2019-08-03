import React from 'react';
import { connect } from 'react-redux';
import MapboxGL from "@react-native-mapbox-gl/maps";

  
class RouteContainer extends React.PureComponent {

    render() {
        const { isDestinationAnnotationShown, isOriginAnnotationShown } = this.props.coord

        if (isDestinationAnnotationShown == false || isOriginAnnotationShown == false || this.props.coord.routeGeometry == null) {
            return null;
        }
        
        const directionStyle = {
            lineWidth: 3,
            lineCap: MapboxGL.LineCap.Round,
            lineJoin: MapboxGL.LineJoin.Round,
            lineColor: 'black'
        }   

        return (
            <MapboxGL.ShapeSource id='mapbox-directions-source' shape={this.props.coord.routeGeometry.geometry}>
                <MapboxGL.LineLayer
                    id='mapbox-directions-line'
                    style={directionStyle} />
            </MapboxGL.ShapeSource>
          )
    }
} 


function mapStateToProps(state) {
    return {
        coord: state.queryReducer
    }
}

export default connect(mapStateToProps)(RouteContainer)
