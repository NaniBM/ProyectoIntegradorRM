import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar.jsx';
// import character, { Rick } from './data.js';
import axios from 'axios';
import data from './data';


function App() {

   const [characters, setCharacters] = useState([]);
   const [allChar, setAllChar] = useState([])
   // const onSearch = (newChar) => {
   //    setCharacters([...characters, newChar])
   // }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data?.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setAllChar((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(error => window.alert('Error'));
   }

   function onClose(id) {
      const newCharacters = characters.filter(char => char.id !== id);
      setCharacters(newCharacters)
   }
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/> 
         <Cards characters={characters} onClose={onClose}/>
         <button onClick={() => setCharacters(allChar)}> Reset </button>
      </div>
   );
}

export default App;
