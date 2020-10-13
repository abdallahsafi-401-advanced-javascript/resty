import React from "react";
import superagent from "superagent";
import base64 from "base-64";
import "./reset.css";
import "./app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/Form";
import Results from "./components/results/Results";
import History from "./components/history/History";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      header: {},
      count: 0,
      results: [],
      method: "Get",
      url: "",
    };
  }

  handleChange = async (formData) => {
    await this.setState({ method: formData.method, url: formData.url });
  };

  handleRequest = async (formData) => {
    // await this.setState({ method: formData.method, url: formData.url });
    let data;
    try {
      data = await superagent(formData.method, formData.url);
      this.store({
        url: formData.url,
        method: formData.method,
        results: data.body,
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({
      count: data.body.count,
      results: data.body.results,
      header: data.header,
      method: formData.method,
      url: formData.url,
    });
  };

  store(data) {
    let retrived = JSON.parse(localStorage.getItem("history"));
    // create id and check if we store this request before
    let id = base64.encode(`${data.method}${data.url}`);
    if (retrived && Object.keys(retrived).includes(id)) {
      return;
    } else if (retrived) {
      retrived[id] = data;
      localStorage.setItem("history", JSON.stringify(retrived));
    } else {
      let stored = {};
      stored[id] = data;
      localStorage.setItem("history", JSON.stringify(stored));
    }
  }

  render() {
    return (
      <>
        <Header />
        <Form
          parentCallback={this.handleRequest}
          url={this.state.url}
          method={this.state.method}
        />
        <Results apiData={this.state} />
        <History parentCallback={this.handleChange} />
        <Footer />
      </>
    );
  }
}

export default App;
