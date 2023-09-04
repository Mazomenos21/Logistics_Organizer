import './styles/App.css';
import { Instruments } from './Instruments'; // Asegúrate de tener la ruta correcta
import { useState } from 'react';

function App() {
    const [stock, setStock] = useState(Instruments().map(instrument => ({ ...instrument })));
    const [totalGanancias, setTotalGanancias] = useState(0);
    const [message, setMessage] = useState('');

    const rest = (id) => {
        if (stock[id].stock > 0) {
            setTotalGanancias(totalGanancias + stock[id].price);
            const updatedStock = [...stock];
            updatedStock[id].stock = updatedStock[id].stock - 1;
            setStock(updatedStock);
            setMessage(`Producto ${stock[id].name} en proceso. Ganancias acumuladas: ${totalGanancias + stock[id].price}`);
        }
    };

    const add = (id) => {
        const updatedStock = [...stock];
        updatedStock[id].stock = updatedStock[id].stock + 1;
        setStock(updatedStock);
        setMessage('');
    };

    const process = () => {
        setMessage('No hay Producto en orden');
    };

    return (
        <div className="App d-flex flex-wrap justify-content-center">
            {stock.map((instrument, index) => (
                <div key={instrument.id} className="card m-2" style={{ width: '18rem' }}>
                    <img src={instrument.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{instrument.name}</h5>
                        <p className="card-text">Precio: {instrument.price}</p>
                        <p className="card-text">Cantidad: {instrument.stock} en almacen</p>
                        {message && <p>{message}</p>}
                        <button className="btn btn-secondary m-1" onClick={process}>
                            Sin orden
                        </button>
                        <button className="btn btn-danger m-1" onClick={() => rest(index)}>
                            En proceso
                        </button>
                        <button className="btn btn-success m-1" onClick={() => add(index)}>
                            Completado
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
