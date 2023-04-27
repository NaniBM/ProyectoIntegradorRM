import Card from './card/Card';
import styled from "styled-components"


const DivContainter = styled.div`
   display: flex;
   flex-wrap: wrap;
`
export default function Cards({ characters, onClose }) {
   return (
      <DivContainter>
         {
            characters.map(({ id, name, status, species, 
               gender, origin, image }, index) =>  {
               return(
                  <Card 
                    key={id} 
                    id={id} 
                    name={name} 
                    status={status} 
                    species={species} 
                    gender={gender} 
                    image={image} 
                    origin={origin.name} 
                    onClose={onClose}
                  />
               )
            })
         }
      </DivContainter>
   )
}