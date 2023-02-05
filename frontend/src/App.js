import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar,Home,About,Academics,Events,Gallery,Contact,SignUp} from './components'
function App() {
return (
	<Router>
		<div>

	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
    <Route path='/academics' element={<Academics/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/gallery' element={<Gallery/>} />
		
		<Route path='/contact' element={<Contact/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</div>
	</Router>
);
}

export default App;
