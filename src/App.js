
import './App.css';
import NavBar from './components/NavBar';
import NewsList from './components/NewsList';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import News from './pages/News';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element ={<News />} />


      </Routes>
      {/* <NewsList /> */}
      
    </div>
  );
}

export default App;