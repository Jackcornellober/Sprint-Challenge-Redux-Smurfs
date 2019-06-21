import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }
  
    addSmurf = event => {
      event.preventDefault();
      this.props.addSmurf({
        name: this.state.name,
        age: parseInt(this.state.age),
        height: this.state.height,
      });
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div className="AddForm">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
      );
    }
  }

export default AddForm