"use strict";
class Robotics extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Sinusoidal Profile (vi, vf, d)"
					link="https://www.desmos.com/calculator/uflcb1tpbg"
					desc="A graph that models a sinusoidal motion profile for the robot, which is defined in terms of initial velocity, final velocity, and distance."
				/>
				<DesmosCard
					name="Sinusoidal Profile (vi, d, a)"
					link="https://www.desmos.com/calculator/zdsplsxxvt"
					desc="A graph that models a sinusoidal motion profile for the robot, which is defined in terms of initial velocity, distance, and peak acceleration."
				/>
				<DesmosCard
					name="Bezier Curves"
					link="https://www.desmos.com/calculator/kfxusqrzxr"
					desc="The type of curve that the robot follows. (I obviously didn't invent the curve!)"
				/>
				<DesmosCard
					name="Arcade vs Normal Drive"
					link="https://www.desmos.com/calculator/rkrejt1t0m"
					desc={
						'A quick little visualization that shows the difference between FRC\'s standard "Arcade Drive" and the generic "Normal Drive"'
					}
				/>
				<DesmosCard
					name="Trapezoidal Profile"
					link="https://www.desmos.com/calculator/kwjz1rftld"
					desc="A model of a trapzoidal motion profile, in which acceleration is ramped up and down."
				/>
				<DesmosCard
					name="Exponential Drive"
					link="https://www.desmos.com/calculator/purgigwz0v"
					desc="A model of the teleop drive function used in the 2016 and 2017 seasons. Will be replaced with something revolutionary..."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Robotics />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
