import HomePage from './pages/HomePage';
import SkillsLang from './pages/SkillsLang';
import Projects from './pages/Projects';
import { Box, IconButton, Typography } from '@mui/material';
import Nav from './components/Nav';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Scale } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from './pages/Footer';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
	
	const [pageURL, setPageURL] = useState(0);
	
	useEffect(() => {
		setPageURL(window.location.pathname);
	});
	console.log(pageURL)

	return (
		<>
			<Box>
				<Nav />	

				<section  id="0">
				
					<HomePage />
				
				</section>
				<section id="Skills">
					<SkillsLang />
				</section>
				<section id="Projects">
					<Projects />
				</section>
				<section id="Contact">
					<Footer />
				</section>

				<Box
					p={6}
					sx={{
						zIndex: 1000,
						display: { md: 'flex', xs: 'none' },
						justifyContent: 'space-between',
						position: 'fixed',
						bottom: 60
					}}
				>
					<IconButton href="https://github.com/sesar2">
						<GitHubIcon
							sx={{
								zIndex: 10000,
								height: 54,
								width: 56,
								color: 'white',
								'&:hover': { transform: 'scale(1.1)' },
								transition: 'all 200ms'
							}}
						/>
					</IconButton>
				</Box>
			</Box>
		</>
	);
}

export default App;
