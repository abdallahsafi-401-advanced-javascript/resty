import React from "react";
import "./results.scss";
import { If, Then } from "../if/if.js";
import ReactJson from "react-json-view";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.apiData;
  }

  render() {
    return (
      <>
        <If condition={this.props.loading}>
          <Then>
            <div className="loader">
            </div>
          </Then>
        </If>
        <If condition={this.props.apiData.results}>
          <Then>
            <div id="api-out">
              <ReactJson src={this.props.apiData} theme="monokai" />
            </div>
          </Then>
        </If>
      </>
    );
  }
}
