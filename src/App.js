import './App.css';
import Main from "./Main/Main.js";
import Detail from "./Main/MainDetail.js";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
