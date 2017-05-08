import axios from "axios";
import { API_URL,
         API_KEY,
         STORY_DELETED,
         STORY_DELETE_REJECTED,
         STORY_UPDATED,
         STORY_UPDATE_REJECTED,
         STORY_ADDED,
         STORY_ADD_REJECTED,
         FETCH_STORIES_FULFILLED,
         FETCH_STORIES_REJECTED
        } from '../constants/constants';

const config = {
  headers: {'authorization': API_KEY}
};


// Fetch all Items
export function fetchItems(){
  return function(dispatch){
    axios.get(API_URL, config)
    .then((response) =>{
      dispatch({type: FETCH_STORIES_FULFILLED, payload: response.data.data});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: FETCH_STORIES_REJECTED, payload: err})
    })
  }
}

// Delete a particular Item passing the ID
export function deleteItem(id){
  return function(dispatch){
    axios.delete(API_URL + '/' + id, config)
    .then((response) =>{
      console.log(response)
      dispatch({type: STORY_DELETED, id: id});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: STORY_DELETE_REJECTED, payload: err})
    })
  }
}

//Update a current Item passing the new: ID, Title, and Url.
export function updateItem(id, title, url){
  const dataObject = {
    data: {
      attributes: {
        title,
        url,
      }
    }
  };
  return function(dispatch){
    axios.put(API_URL + '/' + id, dataObject, config)
    .then((response) =>{
      console.log(response)
      dispatch({type: STORY_UPDATED, id: id, payload: response.data.data});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: STORY_UPDATE_REJECTED, payload: err})
    })
  }
}


//Add a new Item passing: Title and Url
export function addItem(title, url){
  const dataObject = {
    data: {
      attributes: {
        title,
        url,
      }
    }
  };
  return function(dispatch){
    axios.post(API_URL, dataObject, config)
    .then((response) =>{
      console.log(response)
      dispatch({type: STORY_ADDED, payload: response.data.data});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: STORY_ADD_REJECTED, payload: err})
    })
  }
}
