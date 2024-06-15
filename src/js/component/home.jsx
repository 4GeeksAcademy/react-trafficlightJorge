import React from "react";
import TrafficLight from "./TrafficLight";

const Home = () => {
    return (
        <div className="text-center">
			<div>
				<h1>You control the traffic now!</h1>
				<TrafficLight />
			</div>
			<div>
				<p>
					Made by <strong>Jorge Astorga</strong> for <a href="http://www.4geeksacademy.com">4Geeks Academy</a>!
				</p>
			</div>
        </div>
    );
};

export default Home;
