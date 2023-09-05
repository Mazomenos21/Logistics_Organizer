import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
//import "./styles/Personal.css";
//import imagen1 from './img/imagen1.jpg';


export const Estado = ({Nombre,Identificacion,Cargo}) =>{
    const [estado, setEstado] = useState("Activo");

    const CambiarEstado = (nuevoEstado)=>{
        setEstado(nuevoEstado);
    };

    const Activo = () => {
        CambiarEstado("Activo");
    };

    const Espera = () => {
        CambiarEstado("En Espera");
    };

    const Inactivo = () => {
        CambiarEstado("Inactivo");
    };


    return(

        <>
            <div className="main-container">
                <div className="item">
                    <div className="image-container">
                            <img src= {imagen1} alt="Imagen 1"/>
                    </div>
                        <div className="text-container">
                            <p>Nombre: {Nombre}</p>
                            <p>Identificación:{Identificacion} </p>
                            <p>Cargo: {Cargo}</p>
                            <h2>Estado:{estado}</h2>
                            <div className="contenedor-del-boton">
                            <button className="verde" onClick={Activo}></button>
                            <button className="naranja" onClick={Espera}></button>
                            <button className="rojo" onClick={Inactivo}></button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

Estado.propTypes={
    Nombre: PropTypes.string.isRequired,
    Identificacion: PropTypes.string.isRequired,
    Cargo: PropTypes.string.isRequired,
};

export default Estado;
