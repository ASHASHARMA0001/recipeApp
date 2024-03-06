import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path ='/' element={<Home/>}/>
   <Route path = '/SingleRecipe' element = {<SingleRecipe/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
