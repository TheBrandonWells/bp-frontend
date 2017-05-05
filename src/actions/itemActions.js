import axios from "axios";
import { API_URL } from '../constants';

export function fetchItems(){
  const config = {
    headers: {'authorization': 'aa6093641373fffe574094e5c9469a21'}
  };

  return function(dispatch){
    axios.get(API_URL, config)
        .then((response) =>{
          dispatch({type: 'FETCH_STORIES_FULFILLED', payload: response.data.data});
        })
        .catch((err) => {
          dispatch({type: 'FETCH_STORIES_REJECTED', payload: err})
        })
  }
}
