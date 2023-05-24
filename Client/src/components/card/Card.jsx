import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";


function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (event) => {
      event.preventDefault();
      if (isFav) {
        setIsFav(false);
        props.removeFavCard(props.id);
      } else {
        setIsFav(true);
        props.addFavCard(props);
      }
   };

   useEffect(() => {
      props.myFavoriteCard.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavoriteCard]);

   return (
      <div className={style.card} key={props.id}>
         <div>
            <button className={style.boton} onClick={() => props.onClose(props.id)}>Close carta {props.id}</button>
         </div>
         <div className={style.info}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
            <Link to={`/detail/${props.id}`} >
               <h3 className="card-name">{props.name}</h3>
            </Link>
            <h2>Estado: {props.status}</h2>
            <h2>Especie: {props.species}</h2>
            <h2>Genero: {props.gender}</h2>
            <h2>From: {props.origin}</h2>
         </div>
         <div className={style.cont}>
            <img className={style.imagen} src={props.image} alt='' />
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavCard: (char) => dispatch(addFav(char)),
      removeFavCard: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavoriteCard: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);