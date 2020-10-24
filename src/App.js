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
import { If, Then, Else } from "./components/if/if.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      header: {},
      count: 0,
      results: null,
      method: "Get",
      url: "",
      error: "",
    };
  }

  handleChange = async (formData) => {
    await this.setState({ method: formData.method, url: formData.url });
  };

  handleRequest = async (formData) => {
    // await this.setState({ method: formData.method, url: formData.url });
    let data;
    try {
      this.toggleLoading();
      data = await superagent(formData.method, formData.url);
      this.store({
        url: formData.url,
        method: formData.method,
        results: data.body,
      });
      this.setState({
        count: data.body.count,
        results: data.body.results ? data.body.results : data.body,
        header: data.header,
        method: formData.method,
        url: formData.url,
      });

      this.toggleLoading();

    } catch (e) {
      this.setState({error: `Error message: ${e.message}`})
      console.log(e);
    }
  
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

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
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
        <If condition={this.state.error}>
        <Then>
          <div id="error">
            <p>{this.state.error}</p>
          </div>
        </Then>
        <Else>
        <Results apiData={this.state} loading={this.state.loading}/>
        </Else>
      </If>
        
        <History parentCallback={this.handleChange} />
        <Footer />
      </>
    );
  }
}

export default App;
