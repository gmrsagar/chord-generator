import React, { Component } from 'react';
import Select from './Select';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getProgression}>
        <Select
          options={this.props.notes}
          name={'chordKey'}
        />
        <Select
          options={this.props.types}
          name={'progressionType'}
        />
        <div>
          <button type="submit">Generate</button>
        </div>
      </form>
    )
  }
}

export default Form;