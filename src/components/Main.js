import React, {PropTypes, Component } from "react";

import { connect } from "react-redux";
import ItemList from './ItemCards/ItemList.js'

import {fetchItems} from "../actions/itemActions.js"
import './styles.scss';


const Main = class Main extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchItems())
  }

  componentDidMount(){
      const { dispatch } = this.props
      dispatch(fetchItems());
  }

  render(){
    return (
      <div>
        <nav>
          <a className="home-link" href="/">
          <object type="image/svg+xml"
            data="https://assets.biggerpockets.com/assets/logo/logo-1ac27e1791bcad86c95d3326c6c66a014be277075f97e9799825ba209612583a.svg">
          </object>
        </a>
        </nav>
        <ItemList items={this.props.items}/>
      </div>
    )
  }
}

Main.propTypes = {
  items: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.itemReducer.items,
    fetching: state.itemReducer.fetching,
  }
}

export default connect(mapStateToProps)(Main);
