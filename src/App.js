import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Health from './pages/Health';
import Business from './pages/Business';
import Science from './pages/Science';
import Tech from './pages/Tech';
import Sports from './pages/Sports';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route> 
        <Route path="/health" element={<Health />}></Route> 
        <Route path="/business" element={<Business />}></Route> 
        <Route path="/science" element={<Science />}></Route> 
        <Route path="/tech" element={<Tech />}></Route> 
        <Route path="/sports" element={<Sports />}></Route> 
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
