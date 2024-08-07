import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProductList from './components/ProductList';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import ProductComponent from './components/ProductComponent';

function App() {
 

  return (
      <>
      <BrowserRouter>
       <HeaderComponent/>
      <Routes>
         <Route path="/" element={ <Welcome/>}></Route>
         <Route path="/products" element={ <ProductList/>}></Route>
         <Route path="/addProduct" element={ <ProductComponent/>}></Route>
         <Route path="/editProduct/:id" element={ <ProductComponent/>}></Route>
         <Route path="/deleteProduct/:id" element={ <ProductComponent/>}></Route>
         
      </Routes>
      <FooterComponent/>
       </BrowserRouter>
      
      </>
   )
}

export default App
