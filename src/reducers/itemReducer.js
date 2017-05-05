const initialState = {
  items: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action){
  switch (action.type) {
    case "FETCH_STORIES":{
      return {
        fetching: true
      }
    }
    case "FETCH_STORIES_FULFILLED":{
      return {
              fetching: false,
              fetched: true,
              items: action.payload
              }
    }
     case "FETCH_STORIES_REJECTED":{
       return {
                fetching: false,
                error: action.payload
              }
     }

  }
  return state;
}
