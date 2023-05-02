import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
    
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    const [character, setCharacter] = useState({})

    return (
        <>
            {character ? (
                <div className={styles.container}>
                    <p>Name: {character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <img src={character.image} alt={character.name} />
                    <div className={styles.reflex}></div>
                </div>
            ): <div>
                    LOADING
                </div>}
            <Link to={`/`} className={styles.volver}>
                <div>VOLVER ATRAS</div>
            </Link>
        </>
    );
};

export default Detail;