import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Academics from './pages/academics';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
    <Route path='/academics' component={Academics} />
		<Route path='/events' component={Events} />
		<Route path='/gallery' component={Gallery} />
		
		<Route path='/contact' component={Contact} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
