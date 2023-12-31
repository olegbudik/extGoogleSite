import React from 'react';
import '../src/css/app.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


export default function App() {

	return (
		<div> 
			<div className="wrapper">
				<Header/>
				<Main/>
				<Footer/>
			</div>
		</div>
	);
}
