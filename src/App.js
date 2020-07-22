import React, { useState, useEffect } from 'react';
import Main from './components/MainComponent';
import { Sugar } from 'react-preloaders'; 

function App () {

	const [scrollTop, setScrollTop] = useState(0);

	const onscroll = () => {
		const winScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const scrolled = (winScroll / height) * 100;

		setScrollTop(scrolled);
	}

	useEffect(() => {
		window.addEventListener('scroll',onscroll)

		return () => window.removeEventListener('scroll', onscroll);
	}, []);

	return (
		<React.Fragment>
			<div className="progress" style={{width: `${scrollTop}%`}}> </div>
			<Main />
			<Sugar background="#D3D3D3" color="#6b0e55" />
		</React.Fragment>
	);
}

export default App;