import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Book from './components/Book';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/nn" element={<Book />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>

  );
}

export default App;
