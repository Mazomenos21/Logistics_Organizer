import Notificaciones from './Notificaciones';

export const Mensaje = () => {

    return (
        <>
            {<Notificaciones
                notificacion="Administrador ha solicitado preparar
                  parlantes para que Andres Ochoa Gomez lo reclame en la bodega 1"
            />}
            {<Notificaciones
                notificacion="Enrique Mosquera Gutierrez confirmo la
                disponibilidad de los parlantes  y los esta
                preparando para su entrega en la bodega 1"
            />}

            {<Notificaciones
                notificacion="Andres Ochoa Gomez ha reclamado el insumo parlante en la bodega 1"
            />}

            {<Notificaciones
                notificacion="El parlante se ha entregado a Andres Ochoa Gomez"
            />}
        </>
    )
}

export default Mensaje;