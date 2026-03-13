//App.js
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
/* as가 있으면 Router를 오른쪽 단어로 바꿈 */

import Test from "./Test";
import Header from "./Header";
import Footer from "./Footer";
import ReactRouter from './ReactRouter';
import Props from './Props';
import State from './State';
import Etc from './Etc';
import Css from './Css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/">프로젝트 생성</NavLink>
          <NavLink to="/router">라우팅</NavLink>
          <NavLink to="/props">프롭스(Props)</NavLink>
          <NavLink to="/state">스테이트(State)</NavLink>
          <NavLink to="/etc">기타</NavLink>
          <NavLink to="/css">CSS</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Test/>} />
          <Route path="/router" element={<ReactRouter />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/css" element={<Css />} />
        </Routes>
      </main>
      
        
    </Router>
  );
}

export default App;
