import React, { Component } from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';
import { searchEntities } from '../../actions';

class SearchContainer extends Component {
  state = {
    value: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //console.log("submit", this.input.value)
    this.props.dispatch(searchEntities(this.input.value))
  }
  setInputRef = (element) => {
    this.input = element;
  }
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default connect()(SearchContainer);