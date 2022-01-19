import * as React from 'react';
import Router from './Router'

import Nav from './components/Nav'

const App = () => {
  return (
    <div className="max-w-[1111px] mx-auto">
      <header>
        <Nav />
      </header>
      <main>
        <Router />
      </main>
      <footer>

      </footer>
    </div>
  )
};

export default App;
