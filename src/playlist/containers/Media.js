import React, { Component } from 'react';
import { connect } from 'react-redux';

import Media from '../components/Media';

class MediaContainer extends Component {
  render() {
    return (
      <Media
        {...this.props.data}
      />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.data.entities.media[props.id]
  }
}

export default connect(mapStateToProps)(MediaContainer);