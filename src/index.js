import React from "react";
import ReactDOM from "react-dom";

import './index.scss';
import HeaderBackground from './assets/header_background.png';

class App extends React.Component {
  render() {
    return [	
		<header>
			<img src={HeaderBackground} alt="" className="header-background"/>
			<h1>Header</h1>
		</header>,
		<main>
			<p>1index</p>
			<p>2index</p>
			<p>3index</p>
			<p>4index</p>
			<p>5index</p>
			<p>6index</p>
		</main>,
    	<footer>
    		Footer
    	</footer>
    ];
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<App name="Rippin" />, mountNode);