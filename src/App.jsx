import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Pages/Form';
import Navbar from './component/Navbar';


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Form/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
