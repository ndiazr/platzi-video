import {
  SEARCH_ENTITIES,
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_ASYNC_ENTITIES
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

const searchAsyncEntities = (query) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(searchEntities(query))
    }, 5000)
  }
}

export {
  openModal,
  closeModal,
  searchEntities,
  searchAsyncEntities,
}