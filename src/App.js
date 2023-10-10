import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Homes from './Pages/Home/Home'

import Recipe from './Pages/recipe/Recipe'
import Create from './Pages/recipe/Create'
import Detail from './Pages/recipe/Detail'
import Edit from './Pages/recipe/Edit'
import '../src/assets/css/oneui.min.css';
import Blog from './Pages/blog/index';
import Home from './Pages/Home';
import Cafe from './Pages/Product/Cafe';


function App() {
  return (
  <>
  
    <Navbar/>

    <Routes>
       <Route path='/h' exact component={Home} />
       <Route path='/blog/:id' component={Blog} />
       <Route path='/cafe' element={<Cafe/>}></Route>

       <Route path='/' element={<Homes/>}></Route>
       
       <Route path='/recette' element={<Recipe/>}></Route>
       <Route path='/recette/create' element={<Create/>}></Route>
       <Route path='/recette/detail/:id' element={<Detail/>}></Route>
       <Route path='/recette/edit/:id' element={<Edit/>}></Route>
            
    </Routes>

  <Footer/>
   </>
  );
  
}

export default App;
