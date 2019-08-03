import React from 'react';
import { connect } from 'react-redux'
import { TextInput, StyleSheet } from 'react-native';
import {
  showListView,
  updateDestinationInputField,
  fetchSuggestions,
  requestSuggest
} from '../redux/actions'


class DestinationSearchContainer extends React.PureComponent {
 
  state = {
    mapboxClient: null
  }

  handleInputChange = (query) => {
    this.props.updateDestinationInputField(query)
    this.props.requestSuggest(query) // redux-saga
  }

  render() {

    const { destinationQuery } = this.props.location

    return (
      <TextInput
          style={styles.container}
          value={destinationQuery}
          height={40}
          onFocus={this.props.showList}
          placeholder={this.props.label}
          onChangeText={this.handleInputChange}
        />
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    justifyContent: 'center',
    width: '93%',
    backgroundColor: '#F6F8F9',
    marginVertical: 3,
    paddingLeft: 15
  }
});

function mapStateToProps(state) {
  return {
      location: state.queryReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showList: () => dispatch(showListView()),
    fetchSuggestions: (query, createSearch, mapboxClient) => dispatch(fetchSuggestions(query, createSearch, mapboxClient)),
    updateDestinationInputField: (value) => dispatch(updateDestinationInputField(value)),
    requestSuggest: (query) => dispatch(requestSuggest(query))
  }
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationSearchContainer)