import React from 'react';
import { connect } from 'react-redux'
import { TextInput, StyleSheet } from 'react-native';
import {
  showListView,
  updateOriginInputField,
  fetchSuggestions,
  requestSuggest
} from '../redux/actions'


class OriginSearchContainer extends React.PureComponent {
 
  state = {
    mapboxClient: null
  }

  handleInputChange = (query) => {
    this.props.updateOriginInputField(query)
    this.props.requestSuggest(query) // redux-saga
  }


  render() {

    const { originQuery } = this.props.location

    return (
      <TextInput
          style={styles.container}
          value={originQuery}
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
    updateOriginInputField: (value) => dispatch(updateOriginInputField(value)),
    requestSuggest: (query) => dispatch(requestSuggest(query))
  }
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OriginSearchContainer)