import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './component/Form';
import Table from './component/Table';
import Navbar from './component/Navbar';


function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/Table' element={<Table/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
