"use strict";
class PhysicsTwo extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Equipotential Lines"
					link="https://www.desmos.com/calculator/oppngbzxm9"
					desc="This visualizes the equipotential lines that lie between charged particles. More particles can be added and moved around, and the z value will change the charge of that particle."
				/>
				<DesmosCard
					name="Lenses"
					link="https://www.desmos.com/calculator/vuvjkn4b1v"
					desc="This is a visualization for an image that is transformed by a lense. You can move the point around, and see where the image will be on the other side. You can also rotate the lense, and see what effect that has."
				/>
				<DesmosCard
					name="Snell's Law"
					link="https://www.desmos.com/calculator/ahwgongbkg"
					desc="This visualizes snell's law, as well as solves related problems. Snell's law determines the angle at which light is refracted when passing through different mediums."
				/>
				<DesmosCard
					name="A Rolling Wheel"
					link="https://www.desmos.com/calculator/y3ufqgce0b"
					desc="This simply demonstrated the motion of a point on a rolling wheel, a useful application of parametrics."
				/>
				<DesmosCard
					name="Pendulum Lab"
					link="https://www.desmos.com/calculator/xiypji29qu"
					desc="This lab was used to determine whether mass or string length had an effect on the period of a pendulum."
				/>
				<DesmosCard
					name="Boyle's Law Lab"
					link="https://www.desmos.com/calculator/1s0g4gyzg6"
					desc="This lab tested Boyle's law, which describes the inverse relationship of pressure and volume."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<PhysicsTwo />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
