const data = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      /*const list = state.data.categories[2].playlist;
      const results = list.filter((item) => {
        return item.author.includes(action.payload.query);
      })*/
      let results = [];
      if (action.payload.query) {
        results = state.data.categories.map((item) => {
          return item.playlist.filter((item) => {
            return item.author.toLowerCase().includes(action.payload.query.toLowerCase());
          })
        })  
      }
      return {
        ...state,
        search: results,
      }
    }
    default:
      return state
  }
}

export default data;