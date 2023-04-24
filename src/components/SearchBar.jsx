import styled from "styled-components"

const Button = styled.button`
   background-color: red;
   border-radius: 5px;
`
export default function SearchBar({onSearch}) {
   return (
      <Button>
         <input type='search' className={ true && ''}/>
         <button onClick={onSearch}>Agregar</button>
      </Button>
   );
}