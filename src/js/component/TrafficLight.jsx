import React, { useState } from "react";
import ReactDOM from "react-dom";
import '/workspaces/react-trafficlightJorge/src/styles/trafficLight.css';

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const colors = ["red", "yellow", "green"];
    const [extraColors, setExtraColors] = useState([]);

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

    return (
        <div className="traffic-light">
            {[...colors, ...extraColors].map((lightColor, index) => (
                <div
                    key={index}
                    className={`light ${lightColor} ${color === lightColor ? "active" : ""}`}
                    onClick={() => handleColorClick(lightColor)}
                />
            ))}
            <button onClick={cycleColors}>Cycle Colors</button>
            <button onClick={addExtraColor}>Add Purple</button>
        </div>
    );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default TrafficLight;
