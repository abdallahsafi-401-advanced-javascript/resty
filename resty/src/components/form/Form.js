import React from "react";
import './form.scss';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = { url: "", method: "" };
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeMethod = this.handleChangeMethod.bind(this);

  }

  handleChangeURL(event) {
    this.setState({ url: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.parentCallback(this.state);
  }

  handleChangeMethod(event) {
    this.setState({ method: event.target.value });
  }





  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          URL:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeURL}
          />
        </label>
        <input type="submit" value="Go!" />
        <div onChange={this.handleChangeMethod}>
          <input type="radio" value="Get" name="method" /> Get
          <input type="radio" value="Post" name="method" /> Post
          <input type="radio" value="Put" name="method" /> Put
          <input type="radio" value="Delete" name="method" /> Delete
        </div>
        
      </form>
    );
  }
}
