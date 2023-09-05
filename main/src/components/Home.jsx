import Estado from './Estado';

export const Home = ()=> {

    return(
        <>
            { <Estado
                Nombre = "Carlos Andres Lopera Ramirez"
                Identificacion = "100876498"
                Cargo = "Administardor"
            /> }

            { <Estado
                Nombre = "Enrique Mosquera Gutierrez"
                Identificacion = "105656576"
                Cargo = "Bodeguero"
            /> }

            { <Estado
                Nombre = "Mauricio Ochoa Gomez"
                Identificacion="100789389}"
                Cargo = "Transportador"
            /> }

        </>
    )
}

export default Home;