import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import CategoriesPages from './pages/CategoriesPages';
import BooksPage from './pages/BooksPage';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categorie" element={<CategoriesPages />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
