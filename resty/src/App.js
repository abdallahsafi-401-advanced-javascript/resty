import React from 'react';
import './reset.css';
import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/Form';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: ''
    };
  }

  handleChange = childData => {
    this.setState({url: childData.url, method: childData.method})
  };


  render() {
    return (
      <>
        <Header />
        <Form parentCallback = {this.handleChange}/>
        {this.state.url.length >  0 &&  <div id="user-choices">
          <h3>User Choices</h3>
          <p>URL: <span>{this.state.url}</span></p>
          <p>METHOD: <span>{this.state.method}</span></p>
        </div>}
    
        <Footer />
      </>
    );
  }
}

export default App;
