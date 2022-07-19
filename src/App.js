import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages'
import { Navigation } from './components'


function App() {
  return (
    <Router>
    <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
