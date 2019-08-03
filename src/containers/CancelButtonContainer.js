import React from 'react';
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { hideListView } from '../redux/actions'

class CancelButton extends React.PureComponent {

    onPress = () => {
        this.props.hideList()
    }

    render() {

        const { isShown } = this.props.value

        if (!isShown) {
            return null;
        }
        return (
            <Button title="Cancel" onPress={this.onPress} color="black"/>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.toggleReducer
    }
}

function mapDispatchToProps(dispatch) {
    return { hideList: () => dispatch(hideListView()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelButton)
