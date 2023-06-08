import Login from './components/Login';
import Blogs from './components/Blogs';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route
        path='/login' exact element={<Login/>}
      />
      <Route
        path='/blogs' exact element={<Blogs/>}
      />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
