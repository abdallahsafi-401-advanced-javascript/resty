import React from "react";
import "./form.scss";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = { url: "", method: "Get", isSubmitted: false };
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeMethod = this.handleChangeMethod.bind(this);
  }

  handleChangeURL(event) {
    this.setState({ isSubmitted: false });
    this.setState({ url: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitted: true });
    let raw = await fetch(this.state.url);
    let jsonData = await raw.json();
   
    
    // let data = {
    //   count: jsonData.count,
    //   results: jsonData.results.map((e) => {
    //     return {name : e.name , url : e.url};
    //   }),
    // };
    this.props.parentCallback(jsonData.count, jsonData.results, raw.headers);
  }

  handleChangeMethod(event) {
    this.setState({ isSubmitted: false });
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
              value={this.state.value}
              onChange={this.handleChangeURL}
            />
          </label>
          <input type="submit" value="Go!" />
          <div onChange={this.handleChangeMethod}>
            <input type="radio" value="Get" name="method" defaultChecked /> Get
            <input type="radio" value="Post" name="method" /> Post
            <input type="radio" value="Put" name="method" /> Put
            <input type="radio" value="Delete" name="method" /> Delete
          </div>
        </form>

        {this.state.isSubmitted && (
          <div id="user-choices">
            <h3>User Choices</h3>
            <p>
              URL: <span>{this.state.url}</span>
            </p>
            <p>
              METHOD: <span>{this.state.method}</span>
            </p>
          </div>
        )}
      </>
    );
  }
}
