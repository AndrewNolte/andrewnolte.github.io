"use strict";
class Calculus extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Riemann Sums"
					link="https://www.desmos.com/calculator/5s7sewrgkk"
					desc="Graphs for solving and visualizing different methods of Riemann Sum integration."
				/>
				<DesmosCard
					name="Implicit Differentiation"
					link="https://www.desmos.com/calculator/c6tahb9zsp"
					desc="A visual for implicit differentiation"
				/>
				<DesmosCard
					name="Bezier Curves"
					link="https://www.desmos.com/calculator/gas8w4to3j"
					desc="A visual for Bezier Curves."
				/>
				<DesmosCard
					name="The Slope at a point"
					link="https://www.desmos.com/calculator/h5qm1yonfr"
					desc="This was me essentially deriving the power rule when I was bored in AP Physics class."
				/>
				<DesmosCard
					name="Reflections on Parabola"
					link="https://www.desmos.com/calculator/bc9plxtt3g"
					desc="After learning how to find the slope at any point, I thought I'd make a visual for reflections on a parabola. This early version was mistakenly just displaying the tangent and normal line."
				/>
				<DesmosCard
					name="Tangent of Parabola"
					link="https://www.desmos.com/calculator/mgkfmqwdhx"
					desc="I had finally figured out how to find the slope at any point of a parabola, and my sophomore self thought this one was really cool."
				/>
				<DesmosCard
					name="3D Graphing Calculator"
					link="https://www.desmos.com/calculator/54nbh79hjb"
					desc="I didn't make this, but I thought it was pretty cool that you could make this all in 2D graphing software!"
				/>
				<DesmosCard
					name="Tabular Integration"
					link="https://www.desmos.com/calculator/rye2gm5kwh"
					desc="A simple graph for integrating tables of data."
				/>
				<DesmosCard
					name="Area Between Curves"
					link="https://www.desmos.com/calculator/lwmzbeab3p"
					desc="A Graph for visualizing and solving for the area between curves."
				/>
				<DesmosCard
					name="Reflections"
					link="https://www.desmos.com/calculator/y7s2odpafs"
					desc="Graph that generates true reflections from vertical beams for any function of x."
				/>
				<DesmosCard
					name="Point Reflections"
					link="https://www.desmos.com/calculator/yv6tntwbud"
					desc="Graph that generates true reflections from a points source for any function of x."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Calculus />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
