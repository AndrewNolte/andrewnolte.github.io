"use strict";
class NavBar extends React.Component {
	render() {
		return (
			<div
				data-collapse="medium"
				data-animation="default"
				data-duration="400"
				className="nav w-nav"
			>
				<div className="w-container">
					<a href="#" className="logo w-nav-brand">
						<div className="text-block">N</div>
					</a>
					<nav role="navigation" className="nav-menu w-nav-menu">
						<a
							target="_blank"
							href="https://github.com/AndrewNolte"
							className="nav-link w-nav-link w--current"
						>
							Projects
						</a>
						<div
							data-hover="1"
							data-delay="100"
							className="w-dropdown"
						>
							<div
								className="nav-link w-dropdown-toggle"
								data-ix="new-interaction"
							>
								<div className="w-icon-dropdown-toggle" />
								<div>Graphs</div>
							</div>
							<nav className="w-dropdown-list">
								<a
									href="./robotics.html"
									className="w-dropdown-link"
								>
									Robotics
								</a>
								<a
									href="./physics.html"
									className="w-dropdown-link"
								>
									Physics
								</a>
								<a
									href="./physics2.html"
									className="w-dropdown-link"
								>
									Physics 2
								</a>
								<a
									href="./geometry.html"
									className="w-dropdown-link"
								>
									Geometry
								</a>
								<a
									href="./calculus.html"
									className="w-dropdown-link"
								>
									Calculus
								</a>
								<a
									href="./algebra.html"
									className="w-dropdown-link"
								>
									Algebra
								</a>
								<a
									href="./statistics.html"
									className="w-dropdown-link"
								>
									Statistics
								</a>
							</nav>
						</div>
						<a href="contact.html" className="nav-link w-nav-link">
							Contact
						</a>
					</nav>
					<div className="menu-button w-nav-button">
						<div className="w-icon-nav-menu" />
					</div>
				</div>
			</div>
		);
	}
}
let domContainer = document.querySelector("#nav-id");
ReactDOM.render(<NavBar />, domContainer);
