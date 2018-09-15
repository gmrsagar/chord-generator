import React, { Component } from 'react';

class Select extends Component {
  state = {
    list: ''
  };

  componentWillMount() {
    this.setState({
      list: this.props.options.map((option) =>
      <option value={option}>{option}</option>
    )
    })
  };

  render() {
    return (
      <div className="col-sm-6">
        <div className="form-group">
          <select className="form-control" name={this.props.name}>
            {this.state.list}
          </select>
        </div>
      </div>
    )
  }
};

export default Select;