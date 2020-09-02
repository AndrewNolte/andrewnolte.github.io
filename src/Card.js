"use strict";

class Card extends React.Component {
	render() {
		return (
			<div className="collection-item w-dyn-item w-col w-col-4">
				<a
					target="_blank"
					href={this.props.link}
					className="w-inline-block"
				>
					<h3>{this.props.name}</h3>
					{this.props.children}
				</a>
			</div>
		);
	}
}

class Image extends React.Component {
	getDesc = function(d) {
		if (d == null) {
			return;
		} else {
			return <p>{d}</p>;
		}
	};
	render() {
		return (
			<div>
				{this.getDesc(this.props.desc)}
				<img  src={this.props.src} alt="" className="project-image" />
			</div>
		);
	}
}

class DesmosCard extends React.Component {
	render() {
		return (
			<Card name={this.props.name} link={this.props.link}>
				<div className="paragraph">
					<p>{this.props.desc}</p>
				</div>
				<div>
					<iframe
						src={this.props.link + "?embed"}
						frameBorder="0"
						width="100%"
					/>
				</div>
			</Card>
		);
	}
}

{
	/* <div class="w-dyn-items w-row" id="project-drop-id">
<div class="collection-item w-dyn-item w-col w-col-4">
    <a href="#" class="w-inline-block">
        <h3></h3>
        <div>
            <p>asdf</p>
            <img src="" alt="" class="project-image" />
        </div>
    </a>
</div>
</div> */
}
