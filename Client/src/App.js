import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar.jsx';
// import character, { Rick } from './data.js';
import axios from 'axios';
import data from './data';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([]);

   //Login
   const [access, setAccess] = useState(true)
   const EMAIL =  'myEmail@mail.com'
   const PASSWORD = 'asdfgterh1'

   const navigate = useNavigate();

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   // const login = async(userData) => {
   //    try {
   //       const { email, password } = userData;
   //       const URL = 'http://localhost:3001/rickandmorty/login/'
   //       axios(URL + `?email=${email}&password=${password}`)


   //    } catch (error) {
         
   //    }
   // }
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access ? navigate('/home'): window.alert("User or pass invalid")
      } catch (error) {
         console.log(error)
      }
   }

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         window.alert(error.response.data);
      }
   }

   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //    }).catch(error => {
   //    })
   // }

   function onClose(id) {
      const newCharacters = characters.filter(char => char.id !== id);
      setCharacters(newCharacters)
   }
   const { pathname } =  useLocation()

   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access]);

   return (
      <div className='App'>
         {pathname !== "/" && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path = "/" element={<Form login={login}/>}/>
            <Route path = "/home" element={
               <Cards
               characters={characters}
               onClose={onClose} 
               />}>
            </Route>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/detail/:id" element={<Detail/>}></Route>
            <Route path = "/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
