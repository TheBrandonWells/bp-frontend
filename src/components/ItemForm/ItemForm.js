import React, {PropTypes} from "react";

import * as Actions from "../../actions/itemActions.js"

import './styles.scss';

export default class ItemForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newUrl: '',
    }
  }
  onTitleChange(e) {
    this.setState({newTitle: e.target.value})
  }
  onUrlChange(e) {
    this.setState({newUrl: e.target.value})
  }
  onFormSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    if (this.state.newTitle && this.state.newUrl) {
      dispatch(Actions.addItem(this.state.newTitle, this.state.newUrl))
    }
  }
  render(){
    return (
      <div>
        <h2>Add a new Listing:</h2>
        <form className="newListingForm" onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" value={this.state.newTitle} placeholder="Title (required)" onChange={this.onTitleChange.bind(this)} required/>
          <input type="text" value={this.state.newUrl} placeholder="URL (required)" onChange={this.onUrlChange.bind(this)} required/>
          <button type="submit" className="submitButton" disabled={!this.state.newTitle || !this.state.newUrl}>Enter</button>
        </form>
      </div>
    )
  }
}

ItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
