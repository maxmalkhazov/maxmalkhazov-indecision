console.log("App.js is running");

// JSX = JavaScript XML

const app = {
	title: "Movie App",
	subtitle: "Search for movies",
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
		// call the render function options array has been added to
		renderApp();
	}
}

const onRemoveAll = () => {
	app.options = [];
	renderApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	console.log(option);
};

// create render function that renders the jsx
const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? "Here are your options:" + " " + app.options : "No options"}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<ol>
			    {/* map over app.options array getting back an array of lis. set key and text*/
			    	app.options.map((option) => <li key={option}>You Choose: {option}</li>)
			    }
			</ol>
			<button onClick={onRemoveAll}>Reset</button>
			
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};



const appRoot = document.querySelector("#app");
// call the render function right away
renderApp();