import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Handlebars from "handlebars";
import "./styles.css";
import { bake_cookie, read_cookie } from 'sfcookies';

//cookie code
const cookie_key = 'covid';
bake_cookie(cookie_key, 'your cookie works');
read_cookie(cookie_key);


//BEGIN HANDLEBARS TEMPLATE
const hbr = `
<h1>{{name}} - PAGE NOT FOUND
`;

const template = Handlebars.compile(hbr);

function PageNotFound() {
  const data = {
    name: "404"
  };
  return (
    <div className="PageNotFound">
      <div dangerouslySetInnerHTML={{ __html: template(data) }} />
    </div>
  );
}
//END HANDLEBARS TEMPLATE

//BEGIN ROUTING
function App() {
  return (
	 <Router>
		<div>
		  <main>
			<Switch>
			  <Route exact path="/" component={Home} />
			  <Route component={PageNotFound} />
			</Switch>
		  </main>
		</div>
	  </Router>
	)
}
//END ROUTING

export default App;