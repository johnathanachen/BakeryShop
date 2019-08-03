import React from 'react'
import { connect } from 'react-redux'
import Annotation from '../components/Annotation'


class DestinationAnnotationContainer extends React.PureComponent {

    render() {
        const { isDestinationAnnotationShown } = this.props.annotation

        if (!isDestinationAnnotationShown) {
            return null
        }

        return (
            <Annotation
                imagePath={require('../assets/images/destination-annotation.png')}
                coordinates={[this.props.annotation.destinationCoordLong, this.props.annotation.destinationCoordLat]} />
        )
    }
 

    
}

function mapStateToProps(state) {
    return {
        annotation: state.queryReducer
    }
}

export default connect(mapStateToProps)(DestinationAnnotationContainer)