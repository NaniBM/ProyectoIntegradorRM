import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import styled from "styled-components"
import { removeFav, filterCards, orderCards } from "../../redux/actions/actions"
import { useState } from "react"

const DivContainter = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Favorites =()=>{

   const dispatch = useDispatch()

   const { myFavorites } = useSelector((state)=> state)
   // const [aux, setAux] = useState(false)

   const onClose = (id)=>{
      dispatch(removeFav(id))
   }

   const handleFilter = (event) => {
      const gender = event.target.value
      dispatch(filterCards(gender))
      // setAux(!aux)
   }
   
   const handleOrder = (event) => {
      const order = event.target.value
      dispatch(orderCards(order))
      // setAux(!aux)
   }
   
   return ( 
      <div>
         <div>
            <select name="" id="" onChange={handleFilter}>
               <option value="All" >All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>
         <div>
            <select name="" id="" onChange={handleOrder}>
               <option value="" selected disabled>Sort by</option>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
         </div>
         <DivContainter>
            {myFavorites.map( ({id,name,status,species,gender,origin,image}) => {
               return(
                        <Card
                           key={id}
                           id={id}
                           name={name}
                           status={status}
                           species={species}
                           gender={gender}
                           origin={origin.name}
                           image={image}
                           onClose={onClose}
                        />
                     ) 
                  }
               )
            }
         </DivContainter>
      </div>
   )
}

export default Favorites