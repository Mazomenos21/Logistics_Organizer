import React, { useState } from 'react';
//import Estado from './Estado';
import App from './App';
import Home from './components/Home';
import Inventary from './components/Inventary';
const CambioDePestana = () => {
    const [activeTab, setActiveTab] = useState('estado');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div>
                <button onClick={() => handleTabChange('estado')}>Estado</button>
                <button onClick={() => handleTabChange('inventary')}>App</button>
            </div>
            <div>
                {activeTab === 'estado' ? <Home/> : <Inventary/>}
            </div>
        </div>
    );
};

export default CambioDePestana;