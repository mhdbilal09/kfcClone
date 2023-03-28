import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//pages
import LoginPage from './screens/LoginPage';
import Signup from './screens/Signup';

function App() {
  return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/Signup' element={<Signup/>} />
      
    </Routes>
    </BrowserRouter>      
      
      </>

  );
}

export default App;
