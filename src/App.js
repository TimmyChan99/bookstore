import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoriesPages from './pages/CategoriesPages';
import BooksPage from './pages/BooksPage';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categorie" element={<CategoriesPages />} />
      </Routes>
    </Router>

  );
}

export default App;
