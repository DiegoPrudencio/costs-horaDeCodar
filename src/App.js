import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <Router>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="contact">Contato</Link></li>
            <li><Link to="company">Empresa</Link></li>
            <li><Link to="newProject">Novo Projeto</Link></li>
      </ul>

      <Routes>
        <Route exact path='/' element={<Home /> }></Route>
        <Route path='/company' element={<Company />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/newProject' element={<NewProject />}></Route>
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
