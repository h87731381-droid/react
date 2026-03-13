import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Header from "./Header";
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';




function App() {
  


  return (
    <Router>
      <div>
        <NavLink to="/">메인</NavLink>
        <NavLink to="/sub">서브1</NavLink>
        <NavLink to="/sub2">서브2</NavLink>
      </div>
    
      <Routes>
        <Route path="/" element={<Test1 />}/>
        <Route path="/sub" element={<Test2 />}/>
        <Route path="/sub2" element={<Test3 />}/>
      </Routes>
    </Router>
  );
}

export default App;