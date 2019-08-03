import React from 'react';
import { connect } from 'react-redux';
import Annotation from '../components/Annotation'

class OriginAnnotationContainer extends React.PureComponent {

    render() {
        const { isOriginAnnotationShown } = this.props.annotation

        if (!isOriginAnnotationShown) {
            return null;
        }

        return (
            <Annotation
                imagePath={require('../assets/images/origin-annotation.png')}
                coordinates={[this.props.annotation.originCoordLong, this.props.annotation.originCoordLat]} />
        )
    }
 

    
}

function mapStateToProps(state) {
    return {
        annotation: state.queryReducer
    }
}

export default connect(mapStateToProps)(OriginAnnotationContainer)