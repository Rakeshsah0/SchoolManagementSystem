import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar,Home,About,OurTeam,CollegeLife,NationalInfotechCup2079,Science2,BCA,BscCsit,WhyScience,ExamPreparationMaterial,ResourceCenter,Science2Ebook,EbooksPdfs,Contact,NewAdmission,NoticeBoard,Footer, Counseling} from './components'
function App() {
return (
	<Router>
	<Navbar />
		<div className='main-body'>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/our-team' element={<OurTeam/>}/>
		<Route path='/college-life' element={<CollegeLife/>}/>
		<Route path='/national-infotech-cup-2079' element={<NationalInfotechCup2079/>}/>
		<Route path='/2-science' element={<Science2/>}/>
		<Route path='/bca' element={<BCA/>}/>
		<Route path='/bsc-csit' element={<BscCsit/>}/>
		<Route path='/why-study-computer-science' element={<WhyScience/>}/>
		<Route path='/exam-preparation-material' element={<ExamPreparationMaterial/>}/>
		<Route path='/resource-center' element={<ResourceCenter/>}/>
		<Route path='/+2-science-ebook' element={<Science2Ebook/>}/>
		<Route path='/ebooks-pdfs' element={<EbooksPdfs/>}/>
		<Route path='/contact' element={<Contact/>}/>
		<Route path='/admission' element={<NewAdmission/>}/>
		<Route path='/notice-board' element={<NoticeBoard/>}/>
		<Route path='/counseling' element={<Counseling/>}/>

	</Routes>
	</div>
	<Footer/>
	</Router>
);
}

export default App;
