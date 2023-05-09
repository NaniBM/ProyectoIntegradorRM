import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
// import styles from './Favorites.module.css'
import { removeFav } from "../../redux/actions/actions"

const Favorites =()=>{

    const dispath = useDispatch()

    const myFavorites = useSelector((state)=> state.myFavorites)
    
    const onClose = (id)=>{
        dispath(removeFav(id))
    }
    
        return ( 
            <div >
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
            </div>
         )
}

export default Favorites