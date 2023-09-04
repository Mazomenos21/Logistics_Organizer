import React, { useState } from 'react';
//import Estado from './Estado';
import App from './App';
import Home from './Home';
const CambioDePestana = () => {
    const [activeTab, setActiveTab] = useState('estado');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div>
                <button onClick={() => handleTabChange('estado')}>Estado</button>
                <button onClick={() => handleTabChange('app')}>App</button>
            </div>
            <div>
                {activeTab === 'estado' ? <Home /> : <App />}
            </div>
        </div>
    );
};

export default CambioDePestana;