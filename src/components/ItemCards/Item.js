import React, {PropTypes} from "react";
import './styles.scss';

export default class User extends React.Component{
  render(){
    const { item } = this.props;
    return (
      <li>
        <p>{item.attributes.title}</p>
        <p>{item.attributes.url}</p>
        <i className="fa-trash" />
      </li>
    )
  }
}

User.propTypes = {
  item: PropTypes.object.isRequired,
}
