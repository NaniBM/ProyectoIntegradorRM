import { useState } from "react";
import styled from "styled-components"

const Button = styled.button`
   background-color: red;
   border-radius: 5px;
`

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};


export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')


   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <Button>
         <input 
            type='search'
            onChange={handleChange}
            value={id}
         />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </Button>
   );
}