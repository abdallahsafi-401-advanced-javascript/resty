import React from "react";
import "./form.scss";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: this.props.url, method: this.props.method };
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeMethod = this.handleChangeMethod.bind(this);
  }
  static getDerivedStateFromProps(props) {
    return { url: props.url, method: props.method };
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
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            URL:
            <input
              type="text"
              value={this.state.url}
              onChange={this.handleChangeURL}
            />
          </label>
          <input type="submit" value="Go!" />
          <div onChange={this.handleChangeMethod}>
            <input type="radio" value="Get" name="method" defaultChecked={this.props.method === 'Get'} /> Get
            <input type="radio" value="Post" name="method" defaultChecked={this.props.method === 'Post'} /> Post
            <input type="radio" value="Put" name="method" defaultChecked={this.props.method === 'Put'}/> Put
            <input type="radio" value="Delete" name="method" defaultChecked={this.props.method === 'Delete'}/> Delete
          </div>
        </form>
      </>
    );
  }
}
