import React from "react";
import "./history.scss";

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
   sendData(data) {
     this.props.parentCallback(data);
  }
  render() {
    let retrived = JSON.parse(localStorage.getItem("history"));
    const items = [];
    if (retrived) {
      for (const [index, value] of Object.entries(retrived)) {
        items.push(
          <li key={index}>
            <div id="history">
              <h3>{value.method}</h3>
              <button
                onClick={() =>
                  this.sendData({ method: value.method, url: value.url })
                }
              >
                {value.url}
              </button>
            </div>
          </li>
        );
      }
    }

    return <div>{items}</div>;
  }
}
