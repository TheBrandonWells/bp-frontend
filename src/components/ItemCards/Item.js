import React, {PropTypes} from "react";
import './styles.scss';

export default class Item extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: this.props.item.title,
      url: this.props.item.url
    }
  }

  onClickDelete() {
    const { item, deleteItem } = this.props;
    deleteItem(item.id)
  }

  onClickEdit() {
    this.setState({editing: true})
  }

  onUpdateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onUpdateUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  onClickCancel() {
    this.setState({editing: false});
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { item, updateItem } = this.props;

    updateItem(item.id, this.state.title, this.state.url)
    this.setState({editing: false});

  }

  render(){

    const { item, count } = this.props;

    return (
      <li className={count % 3 === 1 ? 'featured' : ''}>
        { this.state.editing ?
          <form className= "editForm" onSubmit={this.onFormSubmit.bind(this)}>
            <input onChange={this.onUpdateTitle.bind(this)}
                  className="cardHeader"
                  defaultValue={item.attributes.title}/>

            <input onChange={this.onUpdateUrl.bind(this)}
                   className="cardHeader"
                   defaultValue={item.attributes.url}/>

            <div className="itemTools">
              <i className="fa fa-close" onClick={this.onClickCancel.bind(this)}/>
              <button type="Submit" className="fa fa-save" onClick={this.onFormSubmit.bind(this)}/>
            </div>

          </form>
        :
          <div>
            <p className="cardHeader">{item.attributes.title}</p>
            <p>{item.attributes.url}</p>
            <div className="itemTools">
              <i className="fa fa-edit" onClick={this.onClickEdit.bind(this)}/>
                <i className="fa fa-trash" onClick={this.onClickDelete.bind(this)}/>
            </div>
          </div>
        }
      </li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}
