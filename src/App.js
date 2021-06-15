import React from 'react';
import CardList from './components/CardComponent/CardList';
import Footer from './components/Footer';
import Header from './components/HeaderComponent/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
