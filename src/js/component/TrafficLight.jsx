//1.- Importaciones
import React, { useState } from "react";
import ReactDOM from "react-dom";
import '/workspaces/react-trafficlightJorge/src/styles/trafficLight.css';
//2.- Defino el componente funcional TrafficLight
const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const colors = ["red", "yellow", "green"];
    const [extraColors, setExtraColors] = useState([]);
//3.- Defino las funciones manejadoras de cada acción
    const handleColorClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const cycleColors = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    const addExtraColor = () => {
        setExtraColors([...extraColors, "purple"]);
    };
//4.- Renderización del componente HTML
    return (
        <div className="traffic-light-container">
            <div className="traffic-light">
                {[...colors, ...extraColors].map((lightColor, index) => (
                    <div
                        key={index}
                        className={`light ${lightColor} ${color === lightColor ? "active" : ""}`}
                        onClick={() => handleColorClick(lightColor)}
                    />
                ))}
            </div>
            <div className="buttons-container">
                <button onClick={cycleColors}>Cycle Colors</button>
                <button onClick={addExtraColor}>Add Purple</button>
            </div>
        </div>
    );
};
//5.- Renderización en el DOM
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
//6.- Exportación del componente funcional
export default TrafficLight;
