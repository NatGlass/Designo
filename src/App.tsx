import * as React from 'react';
import Router from './Router'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="max-w-[1111px] mx-auto">
        <header>
          <Nav />
        </header>
        <main>
          <Router />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
