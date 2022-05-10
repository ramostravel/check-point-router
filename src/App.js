
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Setting from './components/Setting';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Description from './components/Description';



function App() {
  const [list,setList]=useState([
    {id:1,name:'Movie1 The expendable',desc:'descreption of movie 1'},
    {id:2,name:'Movie2 Red',desc:'descreption of movie 2'},
    {id:3,name:'Movie3 The spy next door',desc:'descreption of movie 3'}
  ])
  return (
    <div className="App">
     <NavBar/>
      <header className="App-header">
       
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<p>Not Found</p>}/>
          <Route path='/profile' element={<Profile/>}>
          <Route path='setting' element={<Setting/>}/>
          </Route>
          <Route path='/products'element={<ProductList ProdList={list}/>}/>
          <Route path="/products/:prodId"element={<Description ProdList={list}/>}/>
          

        
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
