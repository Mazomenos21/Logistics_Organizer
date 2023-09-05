import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import "../styles/Notificacion.css";
import eliminar from '../img/eliminar.jpeg';

export const Notificaciones = ({notificacion}) => {
    const [mensaje, setNuevaNotificacion] = useState(true);


    const borrar = () => {
        setNuevaNotificacion(false)

    };
    if (!mensaje) {
        return null
    }
    return (
        <>
            <div className="main-container">
                <div className="contenedor-de-notificaciones">
                    <div className="mensaje">
                        <p>{notificacion}</p>
                    </div>
                    <button className="boton-noti" onClick={borrar}><img src={eliminar} alt="Eliminar" width="20"
                                                                         height="20"/></button>
                </div>
            </div>
        </>
    );
}

Notificaciones.propTypes = {
    notificacion: PropTypes.string.isRequired
};

export default Notificaciones;