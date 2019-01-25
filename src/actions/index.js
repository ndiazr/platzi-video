import {
  SEARCH_ENTITIES,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../action-types';

const openModal = (mediaId) => {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

const searchEntities = (query) => {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}

export {
  openModal,
  closeModal,
  searchEntities,
}