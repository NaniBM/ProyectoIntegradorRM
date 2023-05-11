import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import styled from "styled-components"
import { removeFav } from "../../redux/actions/actions"

const DivContainter = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Favorites =()=>{

    const dispatch = useDispatch()

    const myFavorites = useSelector((state)=> state.myFavorites)
    
    const onClose = (id)=>{
        dispatch(removeFav(id))
    }
    
   return ( 
      <div>
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