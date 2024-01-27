import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './public/Globalstyle';

import Signin from './page/Signin';
import Signup from './page/Signup';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

