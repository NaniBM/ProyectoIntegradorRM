import style from "./card.module.css";

export default function Card(props) {

   return (
      <div className={style.card} key={props.id}>
         <div>
            <button className={style.boton} onClick={props.onClose}>Close carta {props.id}</button>
         </div>
         <div className={style.info}>
            <h2>Nombre: {props.name}</h2>
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
