import React from "react";
import "./results.scss";
import ReactJson from "react-json-view";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.apiData;
  }

  render() {
    return (
      <div id="api-out">
        {this.props.apiData.count !==0 && (
          <ReactJson src={this.props.apiData} theme="monokai" />
        )}
      </div>
    );
  }
}
