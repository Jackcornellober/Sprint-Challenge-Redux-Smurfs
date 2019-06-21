import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getData } from '../actions';
import { addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class SmurfVillage extends Component {


  state = {
    name: '',
    age: '',
    height: ''
  };
  
  componentDidMount() {
    this.props.getData();
  }

  addSmurf = event => {
    event.preventDefault();
    console.log (this.state.name)
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
    console.log(this.props.smurfs)
    return (

      <div>
        {this.props.smurfs.map(smurf => 
          <div className="smurf">
          <h3>{smurf.name}</h3>
          <strong>{smurf.height} tall</strong>
          <p>{smurf.age} smurf years old</p>
          </div>
          )}
        <div className="AddForm">
          <form onSubmit={this.addSmurf}>
            <div className = 'inputs'>
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
            </div>
            <button type="submit">Add a Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, smurfs, fetchingData }) => ({
  error,
  smurfs,
  fetchingData
});

export default connect(
    mapStateToProps,
    { getData, addSmurf }
  )(SmurfVillage);
