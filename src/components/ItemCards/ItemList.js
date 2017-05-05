import React, {PropTypes} from "react";
import uuid from "uuid";

import { bindActionCreators } from 'redux'

import * as Actions from "../../actions/itemActions.js"

import Item from './Item.js'
import './styles.scss';

export default class ItemList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 1
    }
  }

  render(){
    let {dispatch} = this.props;
    let boundActionCreators = bindActionCreators(Actions, dispatch)

    const itemNodes = this.props.items.map(function(item, i){
      return (
          <Item key={uuid.v4()} item={item} count={i} {...boundActionCreators}/>
      )
    })

    return (
      <div className="listingsContainer">
        <h2>
          Listings:
        </h2>

        {this.props.items.length === 0 ?
          <p className="none">
            No Listings yet.  Please add one above.
          </p>
        :
          <ul className="itemCards">
            {itemNodes}
          </ul>
        }

        <span><i className="featuredIcon" /> Featured Listings</span>
      </div>
    )
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}
