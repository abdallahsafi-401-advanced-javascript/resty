import React from 'react';
import './reset.css';
import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/Form';
import Results from './components/results/Results';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:{},
      count: 0,
      results: []
    };
  }

  handleChange = (count, results, header) => {
    this.setState({count: count, results: results, header: header});
    console.log('state', this.state);
   
  };


  render() {
    return (
      <>
        <Header />
        <Form  parentCallback = {this.handleChange}/>
        <Results apiData = {this.state}/>
        <Footer />
      </>
    );
  }
}

export default App;
