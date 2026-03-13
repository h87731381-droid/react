import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import './css/index.scss';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import Header from './comp/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/view/:id' element={<ProductView />} />
        </Routes>
      </main>
      <footer></footer>

    </Router>

  );
}

export default App;
