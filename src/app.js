import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Counter from './components/counter';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
