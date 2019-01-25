import {
  SEARCH_ENTITIES,
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_ASYNC_ENTITIES,
  IS_LOADING
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
    
    dispatch(isLoading(true));

    setTimeout(() => {
      dispatch(isLoading(false));
      dispatch(searchEntities(query));
    }, 5000)
  }
}

const isLoading = (value) => {
  return {
    type: IS_LOADING, 
    payload: {
      value
    }
  }
}

export {
  openModal,
  closeModal,
  searchEntities,
  searchAsyncEntities,
}