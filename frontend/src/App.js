import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar,Home,About,OurTeam,CollegeLife,Science2,BCA,BscCsit,Contact,NoticeBoard,Footer,TeacherProfile,Login} from './components'
import { useState } from 'react';
function App() {
	const [navandfooter, setnavandfooter] = useState(true)
return (
	<Router>
		{
			navandfooter&&
		<Navbar />
		}
		<div className='main-body'>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/our-team' element={<OurTeam/>}/>
		<Route path='/college-life' element={<CollegeLife/>}/>
		<Route path='/2-science' element={<Science2/>}/>
		<Route path='/bca' element={<BCA/>}/>
		<Route path='/bsc-csit' element={<BscCsit/>}/>
		<Route path='/contact' element={<Contact/>}/>
		<Route path='/notice-board' element={<NoticeBoard/>}/>
		<Route path={`/teachers/:teacher_id`} element={<TeacherProfile/>}/>
		<Route path={`/login/:profile`} element={<Login navandfooter={navandfooter} setnavandfooter={setnavandfooter} />}/>
		<Route path={`/login`} element={<Login navandfooter={navandfooter} setnavandfooter={setnavandfooter}/>}/>

	</Routes>
	</div>
	{navandfooter&&
	<Footer/>
	}
	</Router>
);
}

export default App;
