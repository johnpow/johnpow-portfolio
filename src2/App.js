import React from 'react';

// import {
//   Navbar,
//   Project,
//   Header,
//   Footer,
// } from './components';

import {
  Navbar,
  Project,
  Footer,
  Header,
} from './components';

const App = () => {
  const name = 'John';

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <h1>Hello {name}</h1>
      <Project/>
      <Footer/>
    </div>
  );
};



export default App;
