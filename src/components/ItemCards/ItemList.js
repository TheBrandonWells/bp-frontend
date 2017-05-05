import React, {PropTypes} from "react";
import uuid from "uuid";

import Item from './Item.js'
import './styles.scss';

export default class UserList extends React.Component{
  render(){
    if(Object.getOwnPropertyNames(this.props.items).length === 0){
      return (<div></div>)
    }
    const itemNodes = this.props.items.map(function(item){
      return (
          <Item key={uuid.v4()} item={item} />
      )
    })

    return (
      <div>
        <center>
        <h1>Listings</h1>

        <ul className="itemCards">
          {itemNodes}
        </ul>

      </center>
      </div>
    )
  }
}

UserList.propTypes = {
  items: PropTypes.array.isRequired,
}
