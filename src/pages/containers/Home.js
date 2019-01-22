import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/HandleError';
import VideoPlayer from '../../player/containers/VideoPlayer';

import { connect } from 'react-redux';

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media,
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render () {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible &&
              <ModalContainer>
                <Modal handleClick={this.handleCloseModal}>
                  <VideoPlayer
                    autoplay={true}
                    title={this.state.media.title}
                    src={this.state.media.src}
                  />
                </Modal>
              </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.data.categories,
    search: state.search,
  }
}

export default connect(mapStateToProps)(Home);