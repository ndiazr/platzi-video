import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/HandleError';
import VideoPlayer from '../../player/containers/VideoPlayer';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import { openModal, closeModal } from '../../actions';

class Home extends Component {
  handleOpenModal = (id) => {
    this.props.dispatch(openModal(id))
  }
  handleCloseModal = (event) => {
    this.props.dispatch(closeModal())
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
            this.props.modal.get('visibility') &&
              <ModalContainer>
                <Modal handleClick={this.handleCloseModal}>
                  <VideoPlayer
                    autoplay={true}
                    id={this.props.modal.get('mediaId')}
                    //title={this.state.media.title}
                    //src={this.state.media.src}
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
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId);
  })

  let searchResults = list();

  const search = state.get('data').get('search');

  if (search) {
    const mediaList = state.get('data').get('entities').get('media');

    searchResults = mediaList.filter((item) => {
      return (
        item.get('author').toLowerCase().includes(search.toLowerCase())
          || item.get('title').toLowerCase().includes(search.toLowerCase())
      );
    }).toList();
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get('modal'),
  }
}

export default connect(mapStateToProps)(Home);