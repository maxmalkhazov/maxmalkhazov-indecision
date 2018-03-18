console.log("Buildit-visible is running");

/*
let text;
let btnText = "Show Details";

const onToggle = () => {
	if (btnText === "Show Details") {
		text = "Now you see me!";
		btnText = "Hide Details";
		render();
	} else if (btnText === "Hide Details") {
		text = "";
		btnText = "Show Details";
		render();
	}
}

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onToggle}>{btnText}</button>
			<p>
				{text}
			</p>
		</div>
	);

	ReactDOM.render(template, appRoot);
};
*/

// Andrew solution

// let visibility = false;

// const toggleVisibility = () => {
// 	visibility = !visibility;
// 	render();
// };

// const render = () => {
// 	const template2 = (
		
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggleVisibility}>
// 				{
// 					visibility ? "Hide Details" : "Show Details"
// 				}
// 			</button>
// 			{
// 				visibility && (
// 					<div>
// 						<p>Here are the details!</p>
// 					</div>
// 				)
// 			}
// 		</div>
// 	);
// 	ReactDOM.render(template2, appRoot);
// };



// const appRoot = document.querySelector("#app");
// render();


class Visibility extends React.Component {
	constructor(props) {
		super(props);
		this.handleVisibility = this.handleVisibility.bind(this);
		this.state = {
			visibility: false
		}
		
	}
	
	handleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	
	
	
	render() {
		return(
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibility}>{this.state.visibility ? "Hide" : "Show"}</button>
				{this.state.visibility && <p>Here are the details!</p>}
			</div>
		);
	}
};

ReactDOM.render(<Visibility />, document.querySelector("#app"));